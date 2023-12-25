import { DialogView } from "@tuval/forms";
export declare class SelectViewDialog extends DialogView {
    private last_added_opa_type;
    private views;
    private filtered_opas;
    private space_id;
    private folder_id;
    private sub_type;
    constructor();
    BindRouterParams({ views }: {
        views: any;
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").HStackClass;
    static Show(views: any[]): Promise<any>;
}
