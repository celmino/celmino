import { Dialog, TTextBox } from '@tuval/forms';
import { NewProjectListView } from './NewProjectListView';
export declare class NewProjectDialog extends Dialog {
    OKButtonClick: any;
    txtName: TTextBox;
    private processProviderDialog;
    processProviderListView: NewProjectListView;
    InitComponents(): void;
}
