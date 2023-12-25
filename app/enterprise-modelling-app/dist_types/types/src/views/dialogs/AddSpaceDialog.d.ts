import { DialogView } from "@tuval/forms";
export declare class AddSpaceDialog extends DialogView {
    constructor();
    BindRouterParams(): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(): Promise<any>;
}
