import { Token, Expression, Locale } from '.';
/**
 * @public
 */
export declare function parseExpression(tokens: Token[], locale?: Locale): Expression;
export declare const priorizedBinaryOperators: string[][];
export declare const postfixUnaryOperators: string[];
