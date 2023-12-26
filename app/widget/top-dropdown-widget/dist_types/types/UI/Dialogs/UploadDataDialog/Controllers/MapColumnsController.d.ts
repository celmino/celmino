import { UIController, UIView } from '@tuval/forms';
import { IGridColumn } from '../../../../modules/Statistics/Views/CasesGrid';
import { IUploadFileReady } from '@tuval/forms';
interface IMapColumn extends IGridColumn {
    mappedData: any;
}
export declare function MapGridHeader(columnInfo: IMapColumn[]): import("@tuval/forms").VStackClass;
export declare function MapColumnsGrid(columns: any, data: any, onSelectedRow: Function): UIView;
export declare class MapColumnsController extends UIController {
    private csv;
    private csvData;
    gridHeaders: IMapColumn[];
    mappingFileName: string;
    mappingName: string;
    private selectedItem;
    protected InitController(): void;
    OnBindModel(fileInfo: IUploadFileReady): void;
    private onColumnMapped;
    LoadView(): UIView;
}
export {};
