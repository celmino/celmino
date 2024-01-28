import { DialogView } from "@tuval/forms";
export declare class SelectPromptDialog extends DialogView {
    private form;
    constructor();
    BindRouterParams(): void;
    OnOK(prompt: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(): Promise<any>;
}
