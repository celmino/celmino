import { TvChart } from '@realmocean/charts';
import { UIView } from '@tuval/forms';
import { MVIMetricBox } from './MetricBox';
export interface MVIMetricSection {
    metricBoxNodels: MVIMetricBox[];
    chart: TvChart;
}
export declare function MetricsSection(params: MVIMetricSection): UIView;
