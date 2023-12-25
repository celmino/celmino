import { Chart } from "chart.js";
import "./fancy-line-chart";
import "chartjs-adapter-luxon";
import "chartjs-plugin-annotation";
import { BaseTimeSeriesChartProps, TimeSeriesDataset } from "./chart-utils";
import { Component } from "react";
export interface TimeSeriesChartProps extends BaseTimeSeriesChartProps {
    data: TimeSeriesDataset | TimeSeriesDataset[];
}
interface TimeSeriesChartState {
    tooltipModel: any;
}
export declare function renderTimeSeriesChart(element: any, props: TimeSeriesChartProps): void;
export declare class TimeSeriesChart extends Component<TimeSeriesChartProps, TimeSeriesChartState> {
    constructor(props: TimeSeriesChartProps);
    chartContainerRef: HTMLDivElement;
    canvasRef: HTMLCanvasElement;
    tooltipRef: HTMLDivElement;
    chart: Chart;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): JSX.Element;
    renderNoDataMessageIfNecessary(): JSX.Element;
    initChartIfNeeded(props: TimeSeriesChartProps): void;
    GetChartConfig(props: TimeSeriesChartProps): any;
}
export {};
