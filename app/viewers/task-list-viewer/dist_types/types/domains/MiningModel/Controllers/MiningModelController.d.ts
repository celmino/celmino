import { IMiningModelModel, IProjectModel } from '@procetra/common';
import { Event } from '@tuval/core';
import { UIController } from '@tuval/forms';
import { AppControllerClass } from '../../Application/Controllers/AppController';
export declare class MiningModelControllerClass extends UIController {
    private parentAppController;
    MiningModelClosed: Event<any>;
    private title;
    private array;
    private projects;
    private miningModels;
    private project;
    private miningModel;
    private selectedProjectItem;
    private selectedProjectItems;
    private selectedProjectItemController;
    private selectedTab;
    private menu;
    private modelMenu;
    private caseCount;
    private eventCount;
    private DataBinded;
    SetParentAppController(value: AppControllerClass): this;
    protected InitController(): void;
    private OnMiningModelChanged;
    BindRouterParams({ project, miningModel }: {
        project: IProjectModel;
        miningModel: IMiningModelModel;
    }): this;
    private OnNewProjectItem;
    LoadProjects(): void;
    private LoadDesktopView;
    private TestZStack;
    LoadView(): import("@tuval/forms").UISceneClass;
}
export declare function MiningModelController(appController: AppControllerClass, project: IProjectModel, miningModel: IMiningModelModel): MiningModelControllerClass;
