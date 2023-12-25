import { DialogView } from "@tuval/forms";
export declare class AddNoteDialog extends DialogView {
    private space_id;
    private folder_id;
    constructor();
    BindRouterParams({ space_id, folder_id }: {
        space_id: any;
        folder_id: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(space_id: string, folder_id: string): Promise<any>;
}
