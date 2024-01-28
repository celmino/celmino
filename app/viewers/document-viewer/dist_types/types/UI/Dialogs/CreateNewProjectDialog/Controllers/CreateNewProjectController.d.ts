import { CreateNewProjectDialog } from './../CreateNewProjectDialog';
import { UIController, UIView } from '@tuval/forms';
export declare class CreateNewProjectController extends UIController {
    private dialog;
    private $txtName;
    InitController(): void;
    OnBindModel(dialog: CreateNewProjectDialog): void;
    LoadView(): UIView;
}
