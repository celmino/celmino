import { IControl, UIView } from '@tuval/forms';
export declare class ListViewItemClass extends UIView {
    private _tag;
    private _selected;
    constructor();
    onSelected(func: Function): this;
    tag(value: any): this;
    setChilds(...args: any[]): this;
}
export declare function ListView(...subViews: (UIView | IControl)[]): UIView;
export declare function ListViewItem(...content: (UIView | UIView[])[]): ListViewItemClass;
