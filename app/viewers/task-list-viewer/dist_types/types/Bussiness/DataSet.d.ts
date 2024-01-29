import { IActivityInfoBag } from './IDataSet';
export declare class DataSet {
    ProjectId: string;
    Id: string;
    ParentDataSetId: string;
    Name: string;
    EventLog: any;
    Separator: string;
    CaseColumn: string;
    ActivityColumn: string;
    TimeStampColumn: string;
    StartDateColumn: string;
    CostColumn: string;
    DateFormat: string;
    ActivityInfo: IActivityInfoBag;
    FilteredData: any[];
    ConditionRules: string;
    constructor(projectId: string);
    constructor(projectId: string, parent: string);
}
