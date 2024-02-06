import { DialogView } from "@tuval/forms";
export declare class AddTaskDialog extends DialogView {
    private space_id;
    private folder_id;
    private item_id;
    private task_status;
    constructor();
    BindRouterParams({ space_id, folder_id, item_id, task_status }: {
        space_id: any;
        folder_id: any;
        item_id: any;
        task_status: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(space_id: string, folder_id: string, item_id: string, task_status: string): Promise<any>;
}
