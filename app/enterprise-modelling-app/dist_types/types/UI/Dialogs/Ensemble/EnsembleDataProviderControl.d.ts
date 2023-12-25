import { Control } from '@tuval/forms';
export declare class EnsembleDataProviderControl extends Control<EnsembleDataProviderControl> {
    private EnsembleServers;
    private processTree;
    private filterServers;
    private token;
    private SelectedServer;
    SelectedProcess: any;
    private SelectedDataset;
    private LoadingText;
    private filterText;
    private grid;
    ProcessHistory: any[];
    protected SetupControlDefaults(): Promise<void>;
    private renderServers;
    private renderBread;
    private renderProcessHistory;
    private renderProcessStates;
    private renderElements;
    private renderLoading;
    CreateElements(): any;
}
