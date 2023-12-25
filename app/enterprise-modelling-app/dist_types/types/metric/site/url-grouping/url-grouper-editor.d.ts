/// <reference types="react" />
import { UrlPartGroupingBehavior, UrlPart } from "./url-grouper";
import { Component } from "preact";
interface UrlGrouperEditorState {
}
interface UrlGrouperEditorProps {
    currentUrlPart?: UrlPart;
    onRuleChange?: () => void;
}
export declare class UrlGrouperEditor extends Component<UrlGrouperEditorProps, UrlGrouperEditorState> {
    render(props: UrlGrouperEditorProps): JSX.Element;
    renderSegmentEditor(currentUrlPart: UrlPart): JSX.Element;
    renderSubdomainEditor(currentUrlPart: UrlPart): JSX.Element;
    replacementLabelChanged(e: any): void;
    segmentGroupTypeChanged(e: any, groupingBehavior: UrlPartGroupingBehavior): void;
    matchCriteriaTypeChanged(e: any, isExact: any): void;
    matchCriteriaMatchValuesChanged(e: any): void;
    subdomainGroupTypeChanged(e: any, groupingBehavior: UrlPartGroupingBehavior): void;
    notifyRuleChanged(): void;
}
export {};
