import { HTMLAttributes, ReactNode } from 'react';

export type NoticeBarProps = NoticeBarComponentProps &
	HTMLAttributes<HTMLDivElement>;

export interface NoticeBarComponentProps {
	marquee?: boolean | 'auto';
	marqueeDelay?: number;
	marqueeSpeed?: number;
	ellipsis?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	closeable?: boolean;
	closeIcon?: ReactNode;
	color?: string;
	background?: string;
}

export interface NoticeBarRef {
	root: HTMLDivElement | null;
	reset: () => void;
}

export interface NoticeBarErrorBoundaryProps {
	content?: string;
}
