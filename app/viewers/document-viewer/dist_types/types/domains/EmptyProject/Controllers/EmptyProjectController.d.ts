import { UIController } from '@tuval/forms';
import { IProjectModel } from '@procetra/common';
export declare class EmptyProjectControllerClass extends UIController {
    private project;
    private onUploadDataClick;
    BindRouterParams({ project }: {
        project: any;
    }): void;
    LoadView(): import("@tuval/forms").UISpinner | import("@tuval/forms").UISceneClass;
}
export declare function EmptyProjectController(project: IProjectModel): EmptyProjectControllerClass;
