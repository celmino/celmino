import { Component } from "react";
export interface CustomTooltipProps {
    chartContainerRef: HTMLDivElement;
    tooltipModel: any;
    class?: string;
    hoveredIndex?: any;
    noReverse?: boolean;
}
export interface CustomTooltipLineOptions {
    alwaysShow?: boolean;
    additionalClass?: string;
}
export declare class CustomTooltip extends Component<CustomTooltipProps, any> {
    constructor(props: any);
    tooltipRef: HTMLDivElement;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private positionTooltip;
    renderTooltip(): JSX.Element;
    renderTooltipLines: () => any[];
}
