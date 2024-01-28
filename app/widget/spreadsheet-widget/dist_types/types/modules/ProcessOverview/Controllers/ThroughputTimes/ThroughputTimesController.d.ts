import { UIController, UIView } from '@tuval/forms';
import { EventsOverTimeChart } from '../../../../UI/Controls/EventsOverTimeChart/EventsOverTimeChart';
export declare class ThroughputTimesController extends UIController {
    chart: EventsOverTimeChart;
    protected InitController(): void;
    LoadView(): UIView;
}
