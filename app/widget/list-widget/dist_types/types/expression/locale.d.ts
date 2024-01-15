/**
 * @public
 */
export declare const defaultLocale: {
    multipleDecimalPoint: string;
    expect: string;
    unexpectToken: string;
    expectUnaryOperator: string;
    expectConditionalOperator: string;
    invalidPropertyName: string;
    emptyExpression: string;
    invalidFunctionParameter: string;
};
export declare type Locale = typeof defaultLocale;
export declare function getLocale(locale: null | undefined | Locale): Locale;
export declare function replaceLocaleParameters(locale: string, ...parameters: (number | string)[]): string;
