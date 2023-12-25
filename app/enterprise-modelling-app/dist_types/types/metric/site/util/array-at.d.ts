export declare function at(n: number): any;
declare global {
    interface Array<T> {
        at(n: number): T;
    }
}
