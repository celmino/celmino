import { TuView, DragEventArgs, ITuCollection } from "@realmocean/diagram";
export declare class DashboardView extends TuView {
    pId: string;
    dId: string;
    protected DoExternalDrop(evt: DragEventArgs): ITuCollection;
}
