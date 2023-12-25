import { UIView } from '@tuval/forms';
import { int } from '@tuval/core';
export interface IGridColumn {
    title: string;
    key: string;
    width?: int;
    builder?: (row: any) => UIView;
}
export declare function GridHeader(columnInfo: IGridColumn[]): import("@tuval/forms").VStackClass;
export declare function GridRow(columnInfo: IGridColumn[], row: any, onSelectedRow: Function): import("@tuval/forms").VStackClass;
export declare function CasesGrid(): UIView;
