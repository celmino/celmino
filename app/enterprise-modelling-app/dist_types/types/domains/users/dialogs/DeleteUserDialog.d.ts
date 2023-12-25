import { DialogView } from "@tuval/forms";
export declare class DeleteUserDialog extends DialogView {
    private id;
    constructor();
    BindRouterParams(id: any): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").TextClass;
    static Show(id: string): void;
}
