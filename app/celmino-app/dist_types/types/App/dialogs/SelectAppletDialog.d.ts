import { DialogView, UIView } from "@tuval/forms";
export declare class SelectAppletDialog extends DialogView {
    private last_added_opa_type;
    private filtered_opas;
    private workspaceId;
    BindRouterParams({ workspaceId }: {
        workspaceId: any;
    }): void;
    constructor();
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): UIView;
    static Show(workspaceId: string): Promise<any>;
}
