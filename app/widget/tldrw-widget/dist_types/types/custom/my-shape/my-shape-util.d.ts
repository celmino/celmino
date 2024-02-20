import { Rectangle2d, ShapeProps, ShapeUtil, TLBaseShape, TLOnEditEndHandler, TLOnResizeHandler } from '@tldraw/tldraw';
import React from 'react';
type ICatDog = TLBaseShape<'catdog', {
    w: number;
    h: number;
}>;
export declare class CatDogUtil extends ShapeUtil<ICatDog> {
    private spreadsheet;
    static type: "catdog";
    static props: ShapeProps<ICatDog>;
    canResize: (_shape: ICatDog) => boolean;
    canBind: (_shape: ICatDog) => boolean;
    canEdit: () => boolean;
    shapeHeight: number;
    tha: () => void;
    getDefaultProps(): ICatDog['props'];
    getGeometry(shape: ICatDog): Rectangle2d;
    component(shape: ICatDog): React.JSX.Element;
    indicator(shape: ICatDog): React.JSX.Element;
    onResize: TLOnResizeHandler<ICatDog>;
    onEditEnd: TLOnEditEndHandler<ICatDog>;
}
export {};
