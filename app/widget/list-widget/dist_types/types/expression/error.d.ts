/**
 * @public
 */
export declare class ExpressionError extends Error {
    range: [number, number];
    constructor(message: string, range: [number, number]);
}
