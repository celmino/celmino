import React from 'react';
import { UIView } from '@tuval/forms';
export interface Props {
    children: React.ReactNode;
    template?: (args: any) => UIView;
    columns?: number;
    label?: string;
    style?: React.CSSProperties;
    horizontal?: boolean;
    hover?: boolean;
    handleProps?: React.HTMLAttributes<any>;
    scrollable?: boolean;
    shadow?: boolean;
    placeholder?: boolean;
    unstyled?: boolean;
    onClick?(): void;
    onRemove?(): void;
}
export declare const Container: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
