
export interface IConfig {
    title?: string;
    placeholder?: string;
    selectedValue?: string;
    value?:string;
    width?: string;
    onClick: (selectedItem) => void
}

export interface IData {
    dataSource: IDataSourceItem[] | (() => IDataSourceItem[])
}

export interface IDataSourceItem {
    text: string;
    value: string;
}