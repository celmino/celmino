import { UIController } from '@tuval/forms';
export declare class DeleteMiningModelController extends UIController {
    private model;
    private deleting;
    protected BindRouterParams({ project_id, model_id }: {
        project_id: any;
        model_id: any;
    }): void;
    private action_DeleteModel;
    private view_Content;
    LoadView(): any;
}
