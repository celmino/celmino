/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem, FormFactor } from "./FilterService";
export interface ClientDeviceBuilderProps {
}
interface ClientDeviceBuilderState {
    topDevices: ExactItem[];
    topDevicesLoading: boolean;
    topDevicePage: number;
    topNetworks: ExactItem[];
    topNetworksLoading: boolean;
    showNetworkTypes: boolean;
    formFactorCounts: {
        total: number;
        desktop: number;
        mobile: number;
    };
}
export declare class ClientDeviceBuilder extends Component<ClientDeviceBuilderProps, ClientDeviceBuilderState> {
    constructor(props: ClientDeviceBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: ClientDeviceBuilderProps, state: ClientDeviceBuilderState): JSX.Element;
    renderExistingDeviceFilters(): JSX.Element | JSX.Element[];
    renderExistingNetworkFilters(): JSX.Element | JSX.Element[];
    renderTopDevices(): any;
    renderTopNetworks(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    isTopDeviceApplied(urlHash: string): {
        isApplied: boolean;
        filter: Filter;
    };
    topDevicesNextPage(): void;
    topDevicesPreviousPage(): void;
    changeFormFactor(formFactor: FormFactor): void;
    fetchTopDevices(pageNum?: number): Promise<void>;
    fetchTopNetworks(pageNum?: number): Promise<void>;
    fetchFormFactorCounts(): Promise<void>;
    refetchOtherTopList(changedFilter: Filter): void;
}
export {};
