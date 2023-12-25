import { DialogView } from "@tuval/forms";
export declare class AddTaskDialog extends DialogView {
    private scope_id;
    private task_id;
    constructor();
    BindRouterParams({ scope_id, task_id }: {
        scope_id: any;
        task_id: any;
    }): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").WidgetClass;
    static Show(scope_id: string, task_id: string): Promise<any>;
}
