import "chartjs-adapter-luxon";
import "chartjs-plugin-annotation";
import { TimeSeriesChartProps, TimeSeriesChart } from "./time-series-chart";
export interface AlertTimeSeriesChartProps extends TimeSeriesChartProps {
    alertStartTime: string;
    alertEndTime: string;
    thresholdValue: number;
    thresholdLabel: string;
}
export declare function renderAlertTimeSeriesChart(element: any, props: AlertTimeSeriesChartProps): void;
export declare class AlertTimeSeriesChart extends TimeSeriesChart {
    constructor(props: AlertTimeSeriesChartProps);
    GetChartConfig(props: AlertTimeSeriesChartProps): any;
}
