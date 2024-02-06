import React from 'react';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import { UIView } from '@tuval/forms';
export interface Props {
    dragOverlay?: boolean;
    color?: string;
    disabled?: boolean;
    dragging?: boolean;
    handle?: boolean;
    handleProps?: any;
    height?: number;
    index?: number;
    fadeIn?: boolean;
    transform?: Transform | null;
    listeners?: DraggableSyntheticListeners;
    sorting?: boolean;
    style?: React.CSSProperties;
    transition?: string | null;
    wrapperStyle?: React.CSSProperties;
    value: React.ReactNode;
    onRemove?(): void;
    renderItem?(args: {
        dragOverlay: boolean;
        dragging: boolean;
        sorting: boolean;
        index: number | undefined;
        fadeIn: boolean;
        listeners: DraggableSyntheticListeners;
        ref: React.Ref<HTMLElement>;
        style: React.CSSProperties | undefined;
        transform: Props['transform'];
        transition: Props['transition'];
        value: Props['value'];
    }): React.ReactElement;
    template?: (args: any) => UIView;
}
export declare const Item: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLLIElement>>>;
