import { UIViewBuilderClass } from "@tuval/forms";
export interface IConfig {
    header?: IHeaderConfig;
    selected?: ISelectedConfig;
    titleColor?: string;
    placeholder?: string;
    selectedValue?: string;
    value?: string;
    width?: string;
    onClick: (selectedItem: any) => void;
    onSelectedClick?: (selectedItem: any) => void;
}
export interface IHeaderConfig {
    content?: string | UIViewBuilderClass;
    color?: string;
    font?: IFontConfig;
}
export interface ISelectedConfig {
    value?: string;
    content?: (selectedItem: any) => UIViewBuilderClass;
    color?: string;
    font?: IFontConfig;
}
export interface IFontConfig {
    family?: string;
    size?: string;
    weight?: string;
}
export interface IData {
    dataSource: IDataSourceItem[] | (() => IDataSourceItem[]);
}
export interface IDataSourceItem {
    text: string;
    value: string;
}
