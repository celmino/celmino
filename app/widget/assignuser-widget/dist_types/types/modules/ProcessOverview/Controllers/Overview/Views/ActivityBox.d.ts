import { int } from '@tuval/core';
import { UIView } from '@tuval/forms';
export interface MVIActivityBox {
    activityName: string;
    casePercentage: int;
    eventCount: int;
}
export declare function ActivityBox(params: MVIActivityBox): UIView;
