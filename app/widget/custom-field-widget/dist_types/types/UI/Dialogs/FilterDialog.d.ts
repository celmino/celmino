import { ComboBox, Dialog } from '@tuval/forms';
import { IDataSet } from '../../Bussiness/IDataSet';
import { IProject } from '../../Bussiness/IProject';
export declare class FilterDialog extends Dialog {
    OkButtonClicked: any;
    private csv;
    private grid;
    private caseCombo;
    private timestampCombo;
    private activityCombo;
    private startDateCombo;
    dateFormatCombo: ComboBox;
    private queryBuilder;
    private dataset;
    private project;
    InitComponents(): void;
    private clearForm;
    private columnText;
    SetDataset(project: IProject, dataset: IDataSet): void;
    private OnOKClick;
}
