import { TuDashboardShape } from './TuDashboardShape';
import { TuView, TuHtmlRenderer } from '@realmocean/diagram';
export declare class _TuDashboardShapeHtmlRenderer extends TuHtmlRenderer<TuDashboardShape> {
    GenerateElement(view: TuView, obj: TuDashboardShape): boolean;
    GenerateAttributes(view: TuView, obj: TuDashboardShape): void;
    GenerateBody(view: TuView, rectangleObject: TuDashboardShape): void;
    private writeDropTarget;
    private writeMask;
    GenerateElementFinish(view: TuView, obj: TuDashboardShape): void;
    DecideCache(view: TuView, obj: TuDashboardShape): void;
}
export declare class TuDashboardShapeHtmlRenderer {
    static Apply(result: any[], rectangleObject: TuDashboardShape): void;
}
