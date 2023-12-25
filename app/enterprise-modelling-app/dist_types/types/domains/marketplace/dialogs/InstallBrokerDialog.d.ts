import { DialogView } from "@tuval/forms";
export declare class InstallBrokerDialog extends DialogView {
    private broker_id;
    private formData;
    protected UseRouter(): boolean;
    BindRouterParams({ broker_id }: {
        broker_id: any;
    }): void;
    constructor();
    OnOK(): void;
    OnCancel(): void;
    private action_Install;
    private getDynamicView;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(brokerId: string): Promise<any>;
}
