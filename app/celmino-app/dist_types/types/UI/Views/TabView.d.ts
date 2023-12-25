import { int } from '@tuval/core';
import { IControl, UIView } from '@tuval/forms';
export interface TabViewItemParameters {
    name: string;
    header: UIView;
    rightHeader: UIView;
    content: UIView;
}
declare class TabViewItemClass extends UIView {
    private _name;
    private headerContent;
    private rightHeaderContent;
    __content: UIView | IControl;
    private _onSelected;
    GetHeader(): UIView;
    GetRightHeader(): UIView;
    GetContent(): UIView;
    onSelected(func: Function): this;
    header(content: UIView | IControl): this;
    rightHeader(content: UIView | IControl): this;
    ___content(content: UIView | IControl): this;
    name(value: string): this;
}
export declare class TabViewClass extends UIView {
    private tabs;
    private _selectedTabIndex;
    constructor();
    Body(): UIView;
    setChilds(...args: any[]): this;
    selectedTabIndex(value: int): this;
    Render(): any;
}
export declare function TabView(...subViews: UIView[]): TabViewClass;
export declare function TabViewItem(params: TabViewItemParameters): TabViewItemClass;
export {};
