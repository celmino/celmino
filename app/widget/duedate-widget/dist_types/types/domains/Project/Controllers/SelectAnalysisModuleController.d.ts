import { UIController } from "@tuval/forms";
export declare class SelectAnalysisModuleController extends UIController {
    private project;
    BindRouterParams({ project_id }: {
        project_id: any;
    }): void;
    LoadView(): import("@tuval/forms").VStackClass;
}
