export declare class EbaProject {
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
export declare class EnsembleBrokerClient {
    static Login(): Promise<string>;
    static GetProcesses(token: string): Promise<any[]>;
    static GetProcessSteps(token: string, process_id: string): Promise<any[]>;
}
