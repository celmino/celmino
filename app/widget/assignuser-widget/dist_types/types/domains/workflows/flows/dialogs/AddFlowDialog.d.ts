import { DialogView } from "@tuval/forms";
export declare class AddFlowDialog extends DialogView {
    private project_id;
    constructor();
    BindRouterParams({ project_id }: {
        project_id: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(project_id: string): Promise<void>;
}
