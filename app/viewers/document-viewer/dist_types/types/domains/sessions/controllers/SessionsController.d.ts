import { UIController } from "@tuval/forms";
export declare class SessionsController extends UIController {
    private searchText;
    BindRouterParams({ tenant_id, tenant_name }: {
        tenant_id: any;
        tenant_name: any;
    }): void;
    private Search_Action;
    LoadView(): any;
}
