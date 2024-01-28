import { Dialog } from '@tuval/forms';
import { eBAProjectListControl } from './eBAProjectListControl';
export declare class eBADatasetConnectorDialog extends Dialog {
    eBAProjectsControl: eBAProjectListControl;
    OkButtonClicked: any;
    protected InitComponents(): Promise<void>;
}
