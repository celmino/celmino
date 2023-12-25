import { UIView, UIController } from '@tuval/forms';
import { IGridColumn } from '../../modules/Statistics/Views/CasesGrid';
import { IProjectModel } from '@procetra/common';
export declare const mapTypesModel: {
    name: string;
    color: string;
    foreColor: string;
}[];
interface IMapColumn extends IGridColumn {
    mappedData: any;
}
export declare function MapGridHeader(columnInfo: IMapColumn[]): import("@tuval/forms").VStackClass;
export declare function MapColumnsGrid(columns: any, data: any, onSelectedRow: Function): UIView;
export declare class MapColumnsController extends UIController {
    private project;
    private fileName;
    private fileExt;
    private fileContent;
    private csv;
    private csvData;
    gridHeaders: IMapColumn[];
    selectedItemMe: any;
    mappingFileName: string;
    mappingName: string;
    private selectedItem;
    protected InitController(): void;
    BindRouterParams({ project, file_name, file_ext, content }: {
        project: IProjectModel;
        file_name: string;
        file_ext: string;
        content: string;
    }): void;
    private onColumnMapped;
    private view_Warning;
    private isMappingValid;
    private action_StartUpload;
    private action_Cancel;
    LoadView(): UIView;
}
export {};
