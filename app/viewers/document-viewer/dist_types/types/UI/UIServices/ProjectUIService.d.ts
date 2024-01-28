import { IProjectModel } from '@procetra/common';
export declare class ProjectUIService {
    static NewProject(): Promise<any>;
    static OpenProjectDialog(): Promise<any>;
    static UploadDataDialog(project: IProjectModel): Promise<any>;
    static MapColumnSettingsDialog(): Promise<any>;
}
