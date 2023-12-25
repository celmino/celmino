import { DialogView } from "@tuval/forms";
export declare class SelectViewDialog extends DialogView {
    private last_added_opa_type;
    private views;
    private PowerUps;
    private filtered_opas;
    constructor();
    BindRouterParams(views: any, powerUps: any): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").HStackClass;
    static Show(views: any, powerUps: any): Promise<any>;
}
