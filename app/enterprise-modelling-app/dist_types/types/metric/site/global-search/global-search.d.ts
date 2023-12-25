/// <reference types="react" />
import { Component } from "preact";
import { FilterResults } from "../list-filter/list-filter";
export interface GlobalSearchProps {
}
interface GlobalSearchState {
    searchText: string;
    pageResults: FilterResults;
    endpointResults: FilterResults;
    resourceResults: FilterResults;
    isLoading: boolean;
}
export declare function renderGlobalSearch(elements: Element[], props?: GlobalSearchProps): void;
export declare class GlobalSearch extends Component<GlobalSearchProps, GlobalSearchState> {
    constructor(props: GlobalSearchProps);
    abortController: AbortController;
    searchRef: HTMLFormElement;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(props: GlobalSearchProps, state: GlobalSearchState): JSX.Element;
    renderSearchResults(pageResults: FilterResults, endpointResults: FilterResults, resourceResults: FilterResults): JSX.Element;
    renderPageResults(pageResults: FilterResults): any;
    renderEndpointResults(endpointResults: FilterResults): any;
    renderResourceResults(resourceResults: FilterResults): any;
    search: (searchText: string) => Promise<void>;
    buildEndpointFilteredUrl(): string;
    buildPageFilteredUrl(): string;
    buildResourceFilteredUrl(): string;
    hasSearchResults(): any;
    onSearchTextChanged(evt: any): Promise<void>;
    onSearchKeydown(evt: KeyboardEvent): void;
    onOutsideClick: (evt: any) => void;
}
export {};
