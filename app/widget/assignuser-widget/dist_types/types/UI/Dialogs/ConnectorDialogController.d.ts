import { UIController, UIView } from '@tuval/forms';
import { ConnectorDialog } from './ConnectorDialog';
export declare class ConnectorDialogController extends UIController {
    private dialog;
    private selectedModelItem;
    private selectedItem;
    protected InitController(): void;
    OnBindModel(dialog: ConnectorDialog): void;
    private onOK;
    private onCancel;
    LoadView(): UIView;
}
