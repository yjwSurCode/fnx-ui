import React, {
	forwardRef,
	useCallback,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import useCreation from '../hooks/use-creation';
import useProps from '../hooks/use-props';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useUpdateEffect from '../hooks/use-update-effect';
import Picker from '../picker/index';
import { PickerMultiRef, PickerOption } from '../picker/interface';
import { padZero } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { isEqualArrays, noop } from '../utils/misc';
import useColumnLayout from './hooks/use-column-layout';
import useDateTime from './hooks/use-datetime';
import { DatePickerField, DatePickerProps, DatePickerRef } from './interface';
import { DateTime, iterateNumber } from './utils';

const getMonthEndDay = (year: number, month: number): number => {
	return 32 - new Date(year, month - 1, 32).getDate();
};

type DateTimeRequiredProps = Required<
	Pick<DatePickerProps, 'columnsLayout' | 'filter' | 'formatter' | 'onChange'>
>;

const range = (date: DateTime, min: DateTime, max: DateTime): DateTime => {
	const time = date.getTime();

	if (time < min.getTime()) {
		return min;
	}

	if (time > max.getTime()) {
		return max;
	}

	return date;
};

const DatePicker = forwardRef<DatePickerRef, DatePickerProps>((_props, ref) => {
	const DEFAULT_PROPS = useMemo<DateTimeRequiredProps>(() => {
		return {
			columnsLayout: 'year,month,day',
			filter: (_, v) => v,
			formatter: (_, v) => v,
			onChange: noop,
		};
	}, []);

	const [
		props,
		{
			minDate: _minDate,
			maxDate: _maxDate,
			onConfirm,
			onCancel,
			defaultValue: _defaultValue,
			...restProps
		},
	] = useProps<DateTimeRequiredProps, DatePickerProps>(DEFAULT_PROPS, _props);

	const propsRef = useDefaultsRef(props);

	const columnsLayout = useColumnLayout(props.columnsLayout);

	const [defaultMinDate, defaultMaxDate] = useMemo<
		[DateTime, DateTime]
	>(() => {
		const year = new Date().getFullYear();
		return [
			new DateTime(new Date(year - 10, 0, 1)),
			new DateTime(new Date(year + 10, 11, 31)),
		];
	}, []);

	const minDate = useDateTime(_minDate, defaultMinDate);
	const maxDate = useDateTime(_maxDate, defaultMaxDate);

	const [defaultValue, pickerDefaultValue] = useCreation<
		[DateTime, number[]]
	>(() => {
		let dt = new DateTime(
			_defaultValue != null ? _defaultValue : minDate.getDate(),
		);
		dt = range(dt.isValid() ? dt : minDate, minDate, maxDate);

		return [
			dt,
			columnsLayout.map<number>((type) => {
				if (type === 'year') {
					return dt.getYear();
				} else if (type === 'month') {
					return dt.getMonth() + 1;
				} else if (type === 'day') {
					return dt.getDay();
				} else if (type === 'hour') {
					return dt.getHour();
				} else {
					return dt.getMinute();
				}
			}),
		];
	}, []);

	const [value, setValue] = useState<Date>(() => defaultValue.getDate());
	const valueRef = useDefaultsRef(value);

	const pickerRef = useRef<PickerMultiRef>(null);
	const rootRef = useMemo<DatePickerRef>(
		() => ({
			root: (pickerRef.current && pickerRef.current.root) || null,
			getValue: () => valueRef.current,
		}),
		[valueRef],
	);

	useImperativeHandle<DatePickerRef, DatePickerRef>(ref, () => rootRef, [
		rootRef,
	]);

	const getBoundary = useCallback(
		(type: 'min' | 'max', value: Date) => {
			const boundary = type === 'min' ? minDate : maxDate;

			const year = boundary.getYear();
			let month = 1;
			let date = 1;
			let hour = 0;
			let minute = 0;

			if (type === 'max') {
				month = 12;
				date = getMonthEndDay(
					value.getFullYear(),
					value.getMonth() + 1,
				);
				hour = 23;
				minute = 59;
			}

			if (value.getFullYear() === year) {
				month = boundary.getMonth() + 1;
				if (value.getMonth() + 1 === month) {
					date = boundary.getDay();
					if (value.getDate() === date) {
						hour = boundary.getHour();
						if (value.getHours() === hour) {
							minute = boundary.getMinute();
						}
					}
				}
			}

			return {
				year,
				month,
				date,
				hour,
				minute,
			};
		},
		[maxDate, minDate],
	);

	const getColumns = useCallback(
		(
			layout: DatePickerField[],
			value: Date,
			prevColumns: Array<PickerOption[]> = [],
		): Array<PickerOption[]> => {
			const minObj = getBoundary('min', value);
			const maxObj = getBoundary('max', value);

			const fields: Dictionary<[number, number]> = {
				year: [minObj.year, maxObj.year],
				month: [minObj.month, maxObj.month],
				day: [minObj.date, maxObj.date],
				hour: [minObj.hour, maxObj.hour],
				minute: [minObj.minute, maxObj.minute],
			};

			return layout.map<PickerOption[]>((type, idx) => {
				const [min, max] = fields[type];

				let values = iterateNumber(max - min + 1, (idx) => min + idx);

				values = propsRef.current.filter(type, values);

				// 性能优化
				const prev = prevColumns[idx];
				const next = values.map((value) => ({
					value,
					label: propsRef.current.formatter(type, padZero(value)),
				}));

				if (
					isEqualArrays<PickerOption>(
						prev,
						next,
						(a, b) => a.label === b.label && a.value === b.value,
					)
				) {
					return prev;
				}

				return next;
			});
		},
		[getBoundary, propsRef],
	);

	const [columns, setColumns] = useState<Array<PickerOption[]>>(() =>
		getColumns(columnsLayout, value),
	);

	useUpdateEffect(() => {
		const limited = range(new DateTime(valueRef.current), minDate, maxDate);

		setValue((prev) => {
			if (!limited.equals(valueRef.current)) {
				return limited.getDate();
			}

			return prev;
		});
	}, [maxDate, propsRef, valueRef, minDate]);

	useUpdateEffect(() => {
		propsRef.current.onChange(value);
	}, [propsRef, value]);

	useUpdateEffect(() => {
		setColumns((prev) => getColumns(columnsLayout, value, prev));
	}, [columnsLayout, getColumns, value]);

	const emit = (listener?: (v: Date) => void) => {
		listener && listener(value);
	};

	const handleChange = () => {
		const getValue = (type: DatePickerField, def: number): number => {
			const value = pickerRef.current && pickerRef.current.getValue();

			if (value) {
				for (let i = 0; i < columnsLayout.length; i++) {
					if (columnsLayout[i] === type) {
						const v = value[i];

						if (v != null) {
							return +v;
						}
					}
				}
			}

			return def;
		};

		const year = getValue('year', value.getFullYear());
		const month = getValue('month', value.getMonth() + 1);
		let day = getValue('day', value.getDate());
		const maxDay = getMonthEndDay(year, month);
		day = day > maxDay ? maxDay : day;
		const hour = getValue('hour', value.getHours());
		const minute = getValue('minute', value.getMinutes());

		const nextValue = range(
			new DateTime(new Date(year, month - 1, day, hour, minute)),
			minDate,
			maxDate,
		);

		if (!nextValue.equals(value)) {
			setValue(nextValue.getDate());
		}
	};

	return (
		<Picker.Multi
			data={columns}
			{...restProps}
			defaultValue={pickerDefaultValue}
			ref={pickerRef}
			onChange={handleChange}
			onConfirm={() => emit(onConfirm)}
			onCancel={() => emit(onCancel)}
		></Picker.Multi>
	);
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
