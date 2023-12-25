/// <reference types="react" />
import { Component } from "preact";
export interface FindOtherThingProps {
    filterType: "pages" | "endpoints" | "resources";
}
interface FindOtherThingState {
    findText: string;
    findResults: FindResults;
    isLoading: boolean;
}
export interface FindResults {
    topResults: {
        url: string;
        hash: string;
        isTag: boolean;
    }[];
    totalResultCount: number;
    filterText: string;
}
export declare function renderFindOtherThing(element: any, props: FindOtherThingProps): void;
export declare class FindOtherThing extends Component<FindOtherThingProps, FindOtherThingState> {
    constructor(props: FindOtherThingProps);
    abortController: AbortController;
    findThingRef: HTMLDivElement;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(props: FindOtherThingProps, state: FindOtherThingState): JSX.Element;
    renderFindResults(findResults: FindResults): JSX.Element;
    find: (findText: string) => Promise<void>;
    onFindTextChanged(evt: any): Promise<void>;
    onFindKeydown(evt: KeyboardEvent): void;
    onOutsideClick: (evt: any) => void;
}
export {};
