import { DialogView } from "@tuval/forms";
export declare class DynoDialog extends DialogView {
    private form;
    constructor();
    BindRouterParams(formData: any): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass | import("@tuval/forms").UISpinnerClass;
    static Show(formData: any, width?: string): Promise<any>;
}
