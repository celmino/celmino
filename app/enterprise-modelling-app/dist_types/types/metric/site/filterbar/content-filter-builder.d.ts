/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface ContentFilterBuilderProps {
}
interface ContentFilterBuilderState {
    topContentTypes: ExactItem[];
    topContentTypesLoading: boolean;
    topContentTypePage: number;
}
export declare class ContentFilterBuilder extends Component<ContentFilterBuilderProps, ContentFilterBuilderState> {
    constructor(props: ContentFilterBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: ContentFilterBuilderProps, state: ContentFilterBuilderState): JSX.Element;
    renderExistingContentTypeFilters(): JSX.Element | JSX.Element[];
    renderTopContentTypes(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topContentTypesNextPage(): void;
    topContentTypesPreviousPage(): void;
    fetchTopContentTypes(pageNum?: number): Promise<void>;
}
export {};
