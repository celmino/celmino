import { Control } from '@tuval/forms';
import { IEbaProject } from './eBABrokerClient';
export declare class eBAProjectListControl extends Control<eBAProjectListControl> {
    ProcessData: any[];
    private eBAServers;
    private eBAProject;
    private SelectedServer;
    SelectedProject: IEbaProject;
    private ProcessHistory;
    private SelectedState;
    private filterText;
    private filterServers;
    private grid;
    private LoadingText;
    protected SetupControlDefaults(): void;
    SetProjects(eBAProject: IEbaProject[]): void;
    private renderProjects;
    private renderServers;
    private renderProcessStates;
    private renderProcessHistory;
    private renderElements;
    private renderLoading;
    private renderBread;
    CreateElements(): any;
}
