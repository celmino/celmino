import { UIViewBuilderClass } from "@tuval/forms";


export interface IConfig {
    header?: IHeaderConfig;
    selected? : ISelectedConfig;
    titleColor?: string;
    placeholder?: string;
    selectedValue?: string;
    value?:string;
    width?: string;
    onClick: (selectedItem) => void
    onSelectedClick?: (selectedItem) => void
}

export interface IHeaderConfig {
    content?: string | UIViewBuilderClass;
    color?: string;
    font?: IFontConfig;
}

export interface ISelectedConfig {
    value?: string;
    content?: (selectedItem) =>  UIViewBuilderClass;
    color?: string;
    font?: IFontConfig;
}

export interface IFontConfig {
    family?: string;
    size?: string;
    weight?: string;
}
export interface IData {
    dataSource: IDataSourceItem[] | (() => IDataSourceItem[])
}

export interface IDataSourceItem {
    text: string;
    value: string;
}