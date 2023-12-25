/// <reference types="react" />
import { Component } from "preact";
export interface ListFilterProps {
    filterType: "pages" | "endpoints" | "resources";
}
interface ListFilterState {
    filterText: string;
    filterResults: FilterResults;
    isLoading: boolean;
}
export interface FilterResults {
    topResults: {
        url: string;
        hash: string;
        isTag: boolean;
    }[];
    totalResultCount: number;
    filterText: string;
}
export declare function renderListFilter(element: any, props: ListFilterProps): void;
export declare class ListFilter extends Component<ListFilterProps, ListFilterState> {
    constructor(props: ListFilterProps);
    abortController: AbortController;
    listFilterRef: HTMLDivElement;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(props: ListFilterProps, state: ListFilterState): JSX.Element;
    renderFilterResults(filterResults: FilterResults): JSX.Element;
    filter: (filterText: string) => Promise<void>;
    buildLocalFilterUrl(): string;
    onFilterTextChanged(evt: any): Promise<void>;
    onFilterKeyDown(evt: KeyboardEvent): void;
    onOutsideClick: (evt: any) => void;
}
export {};
