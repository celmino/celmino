import { Control } from '@tuval/forms';
import { Event } from '@tuval/core';
export declare class NewProjectListView extends Control<NewProjectListView> {
    private static SymbolBroker;
    ProcessSelected: Event<any>;
    private Providers;
    private blankProjectDialog;
    protected SetupControlDefaults(): void;
    private renderProviders;
    CreateElements(): any;
}
