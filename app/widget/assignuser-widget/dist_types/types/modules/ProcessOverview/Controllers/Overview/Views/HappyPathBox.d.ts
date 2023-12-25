import { int } from '@tuval/core';
import { UIView } from '@tuval/forms';
export interface MVIHappyPathAbsoluteBoxModel {
    title: string;
    value: int;
    totalValue: int;
}
export declare function HappyPathGaugeBox(params: MVIHappyPathAbsoluteBoxModel): UIView;
export declare function HappyPathBox2(params: MVIHappyPathAbsoluteBoxModel): UIView;
export declare function HappyPathBox3(): UIView;
