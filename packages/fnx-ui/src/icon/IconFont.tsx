import React, { forwardRef, ReactNode, SVGAttributes, useEffect } from 'react';
import { IconComponent, IconProps } from './interface';
import { bem, DEFAULT_SVG_PROPS, DEFAULT_SVG_VIEW_BOX } from './Icon';
import { classnames } from '../utils/namespace';
import { addUnit } from '../utils/format';
import { canUseDom } from '../utils/detect';

const scriptCache = new Set<string>();

const loadScript = (scriptUrl: string) => {
	/**
	 * DOM API required.
	 * Make sure in browser environment.
	 * The Custom Icon will create a <script/>
	 * that loads SVG symbols and insert the SVG Element into the document body.
	 */
	if (
		canUseDom() &&
		typeof scriptUrl === 'string' &&
		scriptUrl.length &&
		!scriptCache.has(scriptUrl)
	) {
		const script = document.createElement('script');
		script.setAttribute('src', scriptUrl);
		script.setAttribute('data-namespace', scriptUrl);
		scriptCache.add(scriptUrl);
		document.body.appendChild(script);
	}
};

export function createFromIconfontCN(
	scriptUrl: string,
	options: SVGAttributes<any> = {},
): IconComponent {
	const IconFont = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
		useEffect(() => {
			loadScript(scriptUrl);
		}, []);

		const {
			className,
			name,
			component: SvgComponent,
			spin,
			children,
			viewBox,
			size,
			color,
			style,
			...rest
		} = props;

		let icon: ReactNode;

		const svgProps: SVGAttributes<any> = {
			...DEFAULT_SVG_PROPS,
			...options,
			viewBox: viewBox || options.viewBox || DEFAULT_SVG_VIEW_BOX,
		};

		if (SvgComponent) {
			icon = <SvgComponent {...svgProps} />;
		} else if (children) {
			icon = <svg {...svgProps}>{children}</svg>;
		} else if (name) {
			icon = (
				<svg {...svgProps}>
					<use xlinkHref={`#${name}`} />
				</svg>
			);
		}

		return (
			<span
				className={classnames(bem({ spin }), className)}
				{...rest}
				style={{ color, fontSize: addUnit(size), ...style }}
				ref={ref}
			>
				{icon}
			</span>
		);
	});

	IconFont.displayName = 'IconFont';

	return IconFont;
}
