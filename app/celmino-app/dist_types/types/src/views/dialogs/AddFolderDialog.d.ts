import { DialogView } from "@tuval/forms";
export declare class AddFolderDialog extends DialogView {
    private space_id;
    constructor();
    BindRouterParams({ space_id }: {
        space_id: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(space_id: string): Promise<any>;
}
