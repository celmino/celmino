import React from 'react';
import { CancelDrop, Modifiers, UniqueIdentifier, KeyboardCoordinateGetter } from '@dnd-kit/core';
import { SortingStrategy } from '@dnd-kit/sortable';
import { UIView } from '@tuval/forms';
export declare function createRange<T = number>(length: number, initializer?: (index: number) => any): T[];
interface Props {
    adjustScale?: boolean;
    cancelDrop?: CancelDrop;
    columns?: number;
    containerStyle?: React.CSSProperties;
    coordinateGetter?: KeyboardCoordinateGetter;
    getItemStyles?(args: {
        value: UniqueIdentifier;
        index: number;
        overIndex: number;
        isDragging: boolean;
        containerId: UniqueIdentifier;
        isSorting: boolean;
        isDragOverlay: boolean;
    }): React.CSSProperties;
    wrapperStyle?(args: {
        index: number;
    }): React.CSSProperties;
    itemCount?: number;
    items?: any;
    handle?: boolean;
    template?: (args: any) => UIView;
    containerLabelTemplate?: (args: any) => UIView;
    placeholderTemplate?: (args: any) => UIView;
    renderItem?: any;
    strategy?: SortingStrategy;
    modifiers?: Modifiers;
    minimal?: boolean;
    trashable?: boolean;
    scrollable?: boolean;
    vertical?: boolean;
}
export declare const TRASH_ID = "void";
export declare function MultipleContainers({ adjustScale, itemCount, cancelDrop, columns, handle, items: initialItems, containerStyle, coordinateGetter, getItemStyles, wrapperStyle, minimal, modifiers, renderItem, template, containerLabelTemplate, placeholderTemplate, strategy, trashable, vertical, scrollable, }: Props): JSX.Element;
export {};
