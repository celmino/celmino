import { Dialog, ListBox } from '@tuval/forms';
export declare class CreateNewProjectDialog extends Dialog {
    OkButtonClicked: any;
    projectList: ListBox;
    private createNewProjectDialogController;
    InitComponents(): void;
    OnShown(): void;
    OnOKClick(value: string): void;
    OnCancel(): void;
}
