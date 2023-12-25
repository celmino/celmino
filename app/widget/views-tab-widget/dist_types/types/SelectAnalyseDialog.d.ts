import { DialogView } from "@tuval/forms";
export declare class SelectAnalyseDialog extends DialogView {
    private last_added_opa_type;
    private views;
    private insightboards;
    private filtered_opas;
    private sub_type;
    constructor();
    BindRouterParams({ views, insightboards }: {
        views: any;
        insightboards?: any[];
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(views: any[], insightboards?: any[]): Promise<any>;
}
