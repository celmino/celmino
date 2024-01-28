import { DialogView } from "@tuval/forms";
export declare class ConnectionListDialog extends DialogView {
    private columns;
    private broker_info;
    private broker_connections;
    private showingOrganizationUnits;
    private isLoading;
    protected BindRouterParams({ broker_info }: {
        broker_info: any;
    }): void;
    LoadView(): any;
    static Show(broker_info: any): Promise<void>;
}
