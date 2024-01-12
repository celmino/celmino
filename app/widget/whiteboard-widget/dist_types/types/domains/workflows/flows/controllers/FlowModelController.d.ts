import { UIFormController } from "@tuval/forms";
export declare class FlowModelController extends UIFormController {
    private modeler;
    private flowId;
    protected BindRouterParams({ flow_id }: {
        flow_id: any;
    }): void;
    LoadView(): import("@tuval/forms").FragmentClass;
}
