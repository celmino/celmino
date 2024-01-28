import { DialogView } from "@tuval/forms";
export declare class EditSettingsDialog extends DialogView {
    private broker_info;
    private connection_id;
    private broker_id;
    private formData;
    protected BindRouterParamsAsync({ broker_info, connection_id, broker_id, tenant_id }: {
        broker_info: any;
        connection_id: any;
        broker_id: any;
        tenant_id: any;
    }): Promise<void>;
    private getDynamicView;
    LoadView(): import("@tuval/forms").DataContextClass;
    static Show(broker_info: any, connection_id: string, broker_id: string, tenant_id: string): Promise<void>;
}
