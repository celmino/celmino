import "./trackjs-setup";
import "./code-block";
import "./menu";
import "./pjax";
import "./toaster";
import "./colorize";
import "./timeline/timeline";
import "./charts/treemap";
import "./charts/nested-treemap";
import "./info-tooltip";
import "./async-content-loader";
import "./modal";
import "./util/array-at";
import "./charts/traffic-sources";
import "./charts/page-view-histogram";
import "./data-list-highlighter";
import { ListFilterProps } from "./list-filter/list-filter";
import { FindOtherThingProps } from "./details/find-other-thing";
import { TimeSeriesChartProps } from "./charts/time-series-chart";
import { BucketHistogramChartProps } from "./charts/bucket-histogram-chart";
import { SimpleTimeSeriesChartProps } from "./charts/simple-time-series-chart";
import { SimpleTimeSeriesBarChartProps } from "./charts/simple-time-series-bar-chart";
import { BackgroundTimeSeriesChartProps } from "./charts/background-time-series-chart";
import { BucketSummaryChartProps } from "./charts/bucket-summary-chart";
import { MiniSummaryChartProps } from "./charts/mini-summary-chart";
import { AlertTimeSeriesChartProps } from "./charts/alert-time-series-chart";
import { ChartPickerProps } from "./charts/chart-picker";
import { GlobalSearchProps } from "./global-search/global-search";
import { UserPickerProps } from "./user-picker/user-picker";
import Pjax from "pjax";
import { HalfPieChartProps } from "./charts/half-pie-chart";
import { PieChartProps } from "./charts/pie-chart";
import { ComboHistogramChartProps } from "./charts/combo-histogram-chart";
import { RowToggler } from "./details/row-toggler";
import { UrlGrouperProps } from "./url-grouping/url-grouper";
import { PercentileBarChartProps } from "./charts/percentile-bar-chart";
import { GeoChartProps } from "./charts/geo-chart";
import { GeoPerformanceChartProps } from "./charts/geo-performance-chart";
import { GeoHistogramChartProps } from "./charts/geo-histogram-chart";
import { SubscriptionFormProps } from "./billing/subscription-form";
import { InstallWizardProps } from "./install/install-wizard";
import { SimpleHeatmapChartProps } from "./charts/simple-heatmap-chart";
import { FilterBarProps } from "./filterbar/filter-bar";
declare global {
    interface Window {
        renderListFilter: (element: any, props: ListFilterProps) => void;
        renderFindOtherThing: (element: any, props: FindOtherThingProps) => void;
        renderGlobalSearch: (element: any, props: GlobalSearchProps) => void;
        renderUserPicker: (element: any, props: UserPickerProps) => void;
        renderChartPicker: (element: any, props: ChartPickerProps) => void;
        renderTimeSeriesChart: (element: any, props: TimeSeriesChartProps) => void;
        renderBucketHistogramChart: (element: any, props: BucketHistogramChartProps) => void;
        renderComboHistogramChart: (element: any, props: ComboHistogramChartProps) => void;
        renderSimpleTimeSeriesChart: (element: any, props: SimpleTimeSeriesChartProps) => void;
        renderSimpleTimeSeriesBarChart: (element: any, props: SimpleTimeSeriesBarChartProps) => void;
        renderSimpleHeatmapChart: (element: any, props: SimpleHeatmapChartProps) => void;
        renderBackgroundTimeSeriesChart: (element: any, props: BackgroundTimeSeriesChartProps) => void;
        renderBucketSummaryChart: (element: any, props: BucketSummaryChartProps) => void;
        renderMiniSummaryChart: (element: any, props: MiniSummaryChartProps) => void;
        renderGeoHistogramChart: (element: any, props: GeoHistogramChartProps) => void;
        renderAlertTimeSeriesChart: (element: any, props: AlertTimeSeriesChartProps) => void;
        renderPercentileBarChart: (element: any, props: PercentileBarChartProps) => void;
        renderHalfPieChart: (element: any, props: HalfPieChartProps) => void;
        renderPieChart: (element: any, props: PieChartProps) => void;
        renderUrlGrouper: (element: any, props: UrlGrouperProps) => void;
        renderGeoChart: (element: HTMLDivElement, props: GeoChartProps) => void;
        renderGeoPerformanceChart: (element: HTMLDivElement, props: GeoPerformanceChartProps) => void;
        renderSubscriptionForm: (element: HTMLElement, props: SubscriptionFormProps) => void;
        renderInstallWizard: (element: HTMLElement, props: InstallWizardProps) => void;
        renderFilterBar: (element: HTMLElement, props: FilterBarProps) => void;
        onPageReady: (ready: any, uniqueKey?: string) => void;
        pjax: Pjax;
        RainbowBucketColors: string[];
        RowToggler: typeof RowToggler;
    }
}
