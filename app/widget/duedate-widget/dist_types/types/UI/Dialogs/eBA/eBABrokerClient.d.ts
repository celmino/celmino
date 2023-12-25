export interface IEbaProject {
    Name: string;
    Caption: string;
    CreatorUserId: string;
    CreationDate: Date;
    Version: string;
    Type: string;
    FastApprove: boolean;
    MultiLanguage: boolean;
    ManagerRoleType: boolean;
    ManagerRoleID: string;
    ShowParentHistory: boolean;
}
export interface IEbaProcess {
    Id: string;
    Name: string;
    UserId: string;
    StartDate: Date;
    FinishDate: any;
    Date: any;
    Finished: boolean;
}
export interface IEbaServer {
    Name: string;
}
export declare class eBABrokerClient {
    static GetProjects(): Promise<IEbaProject[]>;
    static GetProcesses(process_name: string): Promise<IEbaProcess[]>;
    static GetProcessHistory(process_id: string): Promise<any>;
    static GetProcessAllHistory(process_name: string): Promise<any>;
}
