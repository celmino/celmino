import { UIController } from '@tuval/forms';
import { IMiningModelModel, IProjectModel } from '@procetra/common';
export interface DesctopViewParams {
    project: IProjectModel;
    miningModel: IMiningModelModel;
    ProjectItemSelectedAction: Function;
    NewProjectItemAction: Function;
    selectedProjectItemController: UIController;
}
export declare function DesktopView({ project, miningModel, /*  selectedProjectItem, selectedProjectItems, */ ProjectItemSelectedAction, NewProjectItemAction, selectedProjectItemController }: DesctopViewParams): ({ onCloseProject }: {
    onCloseProject: any;
}) => import("@tuval/forms").UISceneClass;
