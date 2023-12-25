import { Chart } from "chart.js";
import "chartjs-adapter-luxon";
import { BaseTimeSeriesChartProps } from "./chart-utils";
import { Component } from "react";
import { BucketData } from "./bucket-histogram-chart";
export interface BackgroundTimeSeriesChartProps extends BaseTimeSeriesChartProps {
    bucketDatas: BucketData[];
    colors: string;
}
export declare function renderBackgroundTimeSeriesChart(element: any, props: BackgroundTimeSeriesChartProps): void;
export declare class BackgroundTimeSeriesChart extends Component<BackgroundTimeSeriesChartProps> {
    constructor(props: BackgroundTimeSeriesChartProps);
    chartRef: HTMLCanvasElement;
    chart: Chart;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): JSX.Element;
    initChartIfNeeded(props: BackgroundTimeSeriesChartProps): void;
    GetChartConfig(props: BackgroundTimeSeriesChartProps): any;
}
