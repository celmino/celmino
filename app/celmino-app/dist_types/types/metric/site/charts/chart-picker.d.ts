/// <reference types="react" />
import { Component } from "preact";
import { Chart } from "chart.js";
import { ChartIconType } from "./chart-utils";
export interface ChartPickerProps {
    pickerId: "pageDetails" | "endpointDetails" | "alertDetails";
    charts: ChartInfo[];
}
export interface ChartInfo {
    chartTitle: string;
    chartIcon: ChartIconType;
    renderChart: (element: any) => Chart;
}
interface ChartPickerState {
    selectedChartIndex: number;
}
export declare function renderChartPicker(element: any, props: ChartPickerProps): void;
export declare class ChartPicker extends Component<ChartPickerProps, ChartPickerState> {
    constructor(props: ChartPickerProps);
    chartRefs: {
        [key: number]: HTMLDivElement;
    };
    dropdownMenuRef: HTMLDivElement;
    chartInstances: {
        [key: number]: Chart;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(props: ChartPickerProps, state: ChartPickerState): JSX.Element;
    renderCharts(charts: ChartInfo[], selectedChartIndex: number): JSX.Element[];
    onChartSelected: (e: any, chartIndex: number) => void;
    renderChartIfNeeded(): void;
    saveLastOpenChart(chartIndex: number, pickerId: string): void;
    getLastOpenChart(pickerId: string): number | null;
}
export {};
