import { int } from '@tuval/core';
export declare enum CostTypes {
    None = "None",
    Fixed = "Fixed",
    TimeBased = "TimeBased"
}
export interface IActivityInfo {
    index: int;
    icon: string;
    name: string;
    costType: CostTypes;
    amount?: int;
}
