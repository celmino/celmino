import { UIController } from '@tuval/forms';
export declare class Bindable<T> {
    private value;
    private controller;
    constructor(initValue: T, controller: UIController);
    get(): T;
    set(value: T): void;
}
