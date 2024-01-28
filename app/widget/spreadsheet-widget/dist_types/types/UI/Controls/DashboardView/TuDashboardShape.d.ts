import { Dialog, DropArea, Control } from '@tuval/forms';
import { CGRectangle } from '@tuval/cg';
import { TuInputEventArgs, TuView, TuRectangle } from '@realmocean/diagram';
import { int } from '@tuval/core';
declare class SettingsDialog extends Dialog {
    private SettingsDialog;
}
export declare class TuDashboardShape extends TuRectangle {
    Control: Control<any>;
    renderedNode: any;
    dialog: SettingsDialog;
    dropTarget: DropArea;
    _test: string;
    _projectId: string;
    _datasetId: string;
    _updated: int;
    private TuDashboardShape;
    SetDataSet(projectId: string, datasetId: string): void;
    protected OnBoundsChanged(old: CGRectangle): void;
    OnDoubleClick(evt: TuInputEventArgs, view: TuView): boolean;
    GetControl(): Control<any>;
}
export {};
