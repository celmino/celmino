export declare class CvsToJson {
    static Convert(csv: any, options: any): any;
    static parse(input: any, startRule: any): any;
}
export declare class SyntaxError extends Error {
    expected: any;
    found: any;
    offset: any;
    line: any;
    column: any;
    constructor(expected: any, found: any, offset: any, line: any, column: any);
}
