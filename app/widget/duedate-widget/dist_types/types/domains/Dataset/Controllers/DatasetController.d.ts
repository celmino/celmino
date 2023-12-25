import { IMiningModelModel, IProjectModel } from '@procetra/common';
import { UIController, UIView } from '@tuval/forms';
export interface DatasetControllerBindingModel {
    project: IProjectModel;
    miningModel: IMiningModelModel;
}
export declare class DatasetControllerClass extends UIController<DatasetControllerBindingModel> {
    private project;
    private miningModel;
    private tabModels;
    private selectedTabIndex;
    private currentController;
    private DataBinded;
    protected InitController(): void;
    private OnNewAnalyseAdded;
    private OnTabSelected;
    OnBindModel(bindingModel: DatasetControllerBindingModel): void;
    private LoadPortalView;
    LoadDesktopView(): UIView;
    LoadView(): UIView;
}
export declare function DatasetController(project: IProjectModel, miningModel: IMiningModelModel): DatasetControllerClass;
