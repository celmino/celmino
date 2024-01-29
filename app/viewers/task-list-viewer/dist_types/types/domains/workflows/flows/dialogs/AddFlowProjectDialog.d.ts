import { DialogView } from "@tuval/forms";
export declare class AddFlowProjectDialog extends DialogView {
    constructor();
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(): Promise<void>;
}
