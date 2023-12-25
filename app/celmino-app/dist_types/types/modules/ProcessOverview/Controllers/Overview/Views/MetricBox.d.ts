import { SparklineModel } from '@realmocean/charts';
import { UIView } from '@tuval/forms';
export interface MVIMetricBox {
    title: string;
    value: string;
    subTitle: string;
    chart: SparklineModel;
}
export declare function PortalMetricBox(params: MVIMetricBox, selected: boolean): UIView;
export declare function DesktopMetricBox(params: MVIMetricBox): UIView;
export declare function MetricBox(params: MVIMetricBox, selected: boolean): UIView;
