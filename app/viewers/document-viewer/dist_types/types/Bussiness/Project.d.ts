import { IDataSet } from './IDataSet';
import { IProject } from './IProject';
export declare class Project implements IProject {
    Id: string;
    Name: string;
    DataSets: IDataSet[];
    constructor(name: string);
}
