import { Dialog, ListBox } from '@tuval/forms';
export declare class OpenProjectDialog extends Dialog {
    OkButtonClicked: any;
    projectList: ListBox;
    private openProjectDialogController;
    InitComponents(): void;
    OnShown(): void;
    private OnOKClick;
}
