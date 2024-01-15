import { Expression, Locale } from '.';
/**
 * @public
 */
export declare function evaluateExpression(expression: Expression, context: {
    [name: string]: unknown;
}, locale?: Locale, customData?: Array<{
    new (...args: any[]): unknown;
}> | ((value: unknown) => value is CustomData)): unknown;
/**
 * @public
 */
export interface CustomData {
    add?(right: unknown): unknown;
    added?(left: unknown): unknown;
    subtract?(right: unknown): unknown;
    subtracted?(left: unknown): unknown;
    multiply?(right: unknown): unknown;
    multiplied?(left: unknown): unknown;
    divide?(right: unknown): unknown;
    divided?(left: unknown): unknown;
    remainer?(right: unknown): unknown;
    remainered?(left: unknown): unknown;
    equal?(value: unknown): unknown;
    lessThan?(value: unknown): unknown;
    greaterThan?(value: unknown): unknown;
    lessThanOrEqual?(value: unknown): unknown;
    greaterThanOrEqual?(value: unknown): unknown;
    power?(value: unknown): unknown;
    powered?(value: unknown): unknown;
}
