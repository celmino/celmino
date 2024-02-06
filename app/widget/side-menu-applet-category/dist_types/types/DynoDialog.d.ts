import { DialogView } from "@tuval/forms";
export declare class DynoDialog extends DialogView {
    private form;
    constructor();
    BindRouterParams(formData: any): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").UISpinnerClass | import("@tuval/forms").VStackClass;
    static Show(formData: any, width?: string): Promise<any>;
}
