import { Event } from '@tuval/core';
import { Dialog } from '@tuval/forms';
import { IActivityInfo } from '../../Bussiness/IActivityInfo';
export declare class ConnectorDialog extends Dialog {
    OkButtonClicked: any;
    private activityInfo;
    Selected: Event<any>;
    XlsxSelected: Event<any>;
    DPFSelected: Event<any>;
    eBASelected: Event<any>;
    private eBAConnectorDialog;
    private InitNonVisualComponent;
    InitComponents(): void;
    private clearForm;
    SetActivityInfo(activityInfo: IActivityInfo): void;
    private OnOKClick;
}
