import { DialogView } from "@tuval/forms";
export declare class SelectViewDialog extends DialogView {
    private last_added_opa_type;
    private filtered_opas;
    private workspaceId;
    private listId;
    private sub_type;
    constructor();
    BindRouterParams({ workspaceId, listId }: {
        workspaceId: any;
        listId: any;
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(workspaceId: string, listId: string): Promise<any>;
}
