import { DialogView } from "@tuval/forms";
export declare class DynoDialog extends DialogView {
    private workspaceId;
    constructor();
    BindRouterParams(workspaceId: string): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(workspaceId: string): Promise<any>;
}
