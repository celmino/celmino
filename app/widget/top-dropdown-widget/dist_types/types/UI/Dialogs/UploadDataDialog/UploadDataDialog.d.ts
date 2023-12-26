import { Dialog } from '@tuval/forms';
import { IProjectModel } from '@procetra/common';
export declare class UploadDataDialog extends Dialog {
    OkButtonClicked: any;
    private uploadDataDialogController;
    InitComponents(): void;
    SetProject(project: IProjectModel): void;
    OnShown(): void;
    private OnCancel;
    private OnOKClick;
}
