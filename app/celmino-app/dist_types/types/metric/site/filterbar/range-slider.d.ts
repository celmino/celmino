/// <reference types="react" />
import { Component } from "preact";
import { toAbbreviatedTimeSpan } from "../util/toAbbreviatedTimeSpan";
import { Filter } from "./Filter";
import { RangeItem } from "./FilterService";
export interface RangeSliderProps {
    parameterName: string;
    rangeParameterName: string;
    min: number;
    max: number;
    step: number;
    fetchHistogram: () => Promise<{
        bucket: number;
        count: number;
    }[]>;
    title: string;
    histogramColors?: string;
    labelDisplay?: (sliderValue: number) => string;
    getValueFromIndex?: (idx: number) => number;
    getIndexFromValue?: (value: number) => number;
}
interface RangeSliderState {
    histogram: {
        bucket: number;
        count: number;
    }[];
    hideLabel: boolean;
}
export declare class RangeSlider extends Component<RangeSliderProps, RangeSliderState> {
    constructor(props: RangeSliderProps);
    labelDisplay: typeof toAbbreviatedTimeSpan;
    getValueFromIndex(idx: number): number;
    getIndexFromValue(value: number): number;
    componentDidMount(): void;
    getFilterForSlider(): Filter;
    getRangeItemFromSliderValues(sliderMin: number, sliderMax: number): RangeItem;
    getRangeItemFromFilter(filter: Filter): RangeItem;
    render(): JSX.Element;
    getSliderMinAndMax(): [number, number];
    onSliderChanged([sliderMin, sliderMax]: number[]): void;
    renderSliderDisplay(): JSX.Element;
    getSliderCount(sliderMin: number, sliderMax: number): number;
    fetchHistogram(): Promise<void>;
}
export {};
