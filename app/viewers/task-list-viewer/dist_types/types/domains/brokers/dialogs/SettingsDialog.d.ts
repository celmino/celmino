import { DialogView } from "@tuval/forms";
export declare class SettingsDialog extends DialogView {
    private broker_info;
    private formData;
    protected BindRouterParams({ broker_info }: {
        broker_info: any;
    }): any;
    private getDynamicView;
    protected OnSubmit(data: any): void;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(broker_info: any): Promise<void>;
}
