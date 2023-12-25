import { DialogView } from "@tuval/forms";
export declare class SelectViewDialog extends DialogView {
    private last_added_opa_type;
    private filtered_opas;
    private space_id;
    private folder_id;
    private sub_type;
    constructor();
    BindRouterParams({ space_id, folder_id }: {
        space_id: any;
        folder_id: any;
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(space_id: string, folder_id: string): Promise<any>;
}
