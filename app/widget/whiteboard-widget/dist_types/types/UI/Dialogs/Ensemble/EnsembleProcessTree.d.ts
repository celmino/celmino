import { TTreeView } from '@tuval/forms';
export declare class EnsembleProcessTreeView extends TTreeView {
    private process_data;
    protected InitComponents(): void;
    SetProcessData(processList: any[]): void;
    private LoadTree;
}
