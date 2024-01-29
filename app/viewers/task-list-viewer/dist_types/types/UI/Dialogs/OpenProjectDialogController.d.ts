import { UIController, UIView } from '@tuval/forms';
import { IProjectModel } from '@procetra/common';
import { OpenProjectDialog } from './OpenProjectDialog';
export declare function ProjectGrid(data: any, onSelectedRow: Function): UIView;
export declare class OpenProjectDialogController extends UIController {
    private dialog;
    private projects;
    selectedProject: IProjectModel;
    protected InitController(): void;
    LoadProjects(): void;
    OnBindModel(model: OpenProjectDialog): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): UIView;
}
