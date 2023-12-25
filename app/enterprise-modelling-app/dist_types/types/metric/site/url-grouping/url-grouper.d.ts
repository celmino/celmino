/// <reference types="react" />
import { h, Component } from "preact";
export interface UrlGrouperProps {
    url: string;
    urlGroupingRule: UrlGroupingRule;
}
export declare enum UrlPartType {
    Protocol = "protocol",
    Subdomain = "subdomain",
    Domain = "domain",
    Segment = "segment"
}
export declare class MatchCriteria {
    matchValues: string[];
    isExact: boolean;
}
export declare class UrlPart {
    type: UrlPartType;
    value: string;
    constructor(type: UrlPartType, value: string);
    groupingBehavior: UrlPartGroupingBehavior;
    replacementLabel: string;
    matchCriteria: MatchCriteria;
    static getDisplayString(urlPart: UrlPart): string;
}
export declare enum UrlPartGroupingBehavior {
    DoNotGroup = "doNotGroup",
    GroupPart = "groupPart",
    GroupToEnd = "groupToEnd",
    VariablePart = "variablePart",
    VariableToEnd = "variableToEnd"
}
export interface UrlGroupingRule {
    id?: string;
    originalUrl: string;
    protocol: UrlPart;
    domain: UrlPart;
    subdomains: UrlPart[];
    segments: UrlPart[];
}
export interface UrlGrouperState extends UrlGroupingRule {
    currentUrlPart?: UrlPart;
    testResults?: {
        pages: {
            [index: string]: string[];
        };
        endpoints: {
            [index: string]: string[];
        };
    };
}
export declare function renderUrlGrouper(element: any, props: UrlGrouperProps): void;
export declare class UrlGrouper extends Component<UrlGrouperProps, UrlGrouperState> {
    constructor(props: UrlGrouperProps);
    render(props: UrlGrouperProps, state?: Readonly<any>): JSX.Element;
    onRuleChange(): void;
    renderActions(): JSX.Element;
    renderTokenizedUrl(): JSX.Element;
    renderSubdomains(subdomains: UrlPart[]): any[];
    renderSegments(segments: UrlPart[]): any[];
    renderTestResults(): JSX.Element;
    renderPageResults(): JSX.Element | JSX.Element[];
    renderEndpointResults(): JSX.Element | JSX.Element[];
    showSegmentSettings(e: MouseEvent, segment: UrlPart): void;
    testRule(): Promise<void>;
    saveRule(e: h.JSX.TargetedEvent<HTMLButtonElement, MouseEvent>): Promise<void>;
    toSerializableRule(): {
        id: any;
        originalUrl: any;
        protocol: any;
        domain: any;
        subdomains: any;
        segments: any;
    };
}
