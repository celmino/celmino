import { UIController, UIView } from '@tuval/forms';
import { IProjectModel } from '@procetra/common';
export declare class UploadDataDialogController extends UIController {
    private project;
    private selectedIndex;
    private selectFileController;
    private mapColumnsController;
    private currentController;
    private fileData;
    private mapping;
    private OnPrepareColumnMapping;
    protected InitController(): void;
    OnBindModel(project: IProjectModel): void;
    LoadView(): UIView;
}
