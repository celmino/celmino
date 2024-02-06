import { DialogView } from "@tuval/forms";
export declare class SelectOpaDialog extends DialogView {
    private last_added_opa_type;
    private filtered_opas;
    private parentId;
    private parentType;
    private opas;
    constructor();
    BindRouterParams({ parentId, parentType, opas }: {
        parentId: any;
        parentType: any;
        opas: any;
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(parentId: string, parentType: string, opas: any[]): Promise<any>;
}
