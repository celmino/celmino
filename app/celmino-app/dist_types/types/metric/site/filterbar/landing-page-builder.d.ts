/// <reference types="react" />
import { Component } from "preact";
import { Filter } from "./Filter";
import { AllItems, ExactItem } from "./FilterService";
export interface LandingPageBuilderProps {
}
interface LandingPageBuilderState {
    topLandingPages: ExactItem[];
    topLandingPagesLoading: boolean;
    topLandingPagesPage: number;
}
export declare class LandingPageBuilder extends Component<LandingPageBuilderProps, LandingPageBuilderState> {
    constructor(props: LandingPageBuilderProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(props: LandingPageBuilderProps, state: LandingPageBuilderState): JSX.Element;
    renderExistingLandingPages(): JSX.Element | JSX.Element[];
    renderTopLandingPages(): any;
    addToFilter(evt: MouseEvent, item: AllItems, isNegated?: boolean): void;
    removeFilter(evt: MouseEvent, filter: Filter): void;
    topLandingPagesNextPage(): void;
    topLandingPagesPreviousPage(): void;
    fetchTopLandingPages(pageNum?: number): Promise<void>;
}
export {};
