import { IParameter, FormFactor, AllItems } from "./FilterService";
import { ClickhouseParameter } from "./ClickhouseParameter";
export declare enum ClickhouseOperator {
    Equals = "Equals",
    EqualsHash = "EqualsHash",
    GreaterThan = "GreaterThan",
    GreaterThanOrEqual = "GreaterThanOrEqual",
    LessThan = "LessThan",
    LessThanOrEqual = "LessThanOrEqual",
    IsNull = "IsNull",
    IsNotNull = "IsNotNull",
    NotEquals = "NotEquals",
    Between = "Between",
    NotBetween = "NotBetween",
    Like = "Like",
    NotLike = "NotLike"
}
export declare namespace ClickhouseOperator {
    function isAndOperator(op: ClickhouseOperator): boolean;
}
export declare class Filter implements IParameter {
    constructor(init?: Partial<Filter>);
    displayFieldName: string;
    displayOperator: string;
    displayValue: string;
    parameterName: string;
    parameter: ClickhouseParameter;
    rawValue: any;
    operator: ClickhouseOperator;
    removeUrl: string;
    getDisplayOperator(operator: ClickhouseOperator): string;
    equals(otherFilter: Filter): boolean;
    toJsonFilter(): JsonFilter;
    static fromItem(item: AllItems, isNegated?: boolean): Filter;
    static fromFormFactor(formFactor: FormFactor): Filter;
}
export interface JsonFilter {
    parameterName: string;
    value: any;
    operator: string;
}
