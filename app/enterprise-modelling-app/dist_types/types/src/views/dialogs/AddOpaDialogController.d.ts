import { DialogView } from "@tuval/forms";
export declare class AddOpaDialogController extends DialogView {
    private space_id;
    private folder_id;
    private sub_type;
    constructor();
    BindRouterParams({ space_id, folder_id, sub_type }: {
        space_id: any;
        folder_id: any;
        sub_type: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(space_id: string, folder_id: string, sub_type: string): Promise<any>;
}
