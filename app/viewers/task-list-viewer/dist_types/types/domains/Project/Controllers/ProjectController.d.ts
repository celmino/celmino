import { IProjectModel, IMiningModelModel } from '@procetra/common';
import { Event } from '@tuval/core';
import { UIController } from '@tuval/forms';
export declare class ProjectControllerClass extends UIController {
    AnalyseModelSelected: Event<any>;
    private menuItems;
    private newMenuItems;
    private menu;
    private project;
    model: IMiningModelModel[];
    private eventCount;
    private caseCount;
    selectedAnalyseModel: IMiningModelModel;
    protected InitController(): void;
    BindRouterParams({ project_id }: {
        project_id: any;
    }): void;
    private OnAddEditAnalyseModelName;
    private OnSelectedAnalyseModelChange;
    private action_CloseProject;
    private action_OpenModel;
    private view_EmptyProject;
    private view_Content;
    private view_SelectAnalysis;
    private AnalyseModelView;
    LoadView(): any;
}
export declare function ProjectController(project: IProjectModel): ProjectControllerClass;
