import { SiteArea } from "../util/UrlHelper";
import { FilterBuilderTab } from "./FilterStore";
export type ClickhouseServerParameter = ClickhouseParameter & {
    tables: string;
};
export declare class ClickhouseParameter {
    constructor(init?: Partial<ClickhouseServerParameter>);
    parseTables(tables: string): any;
    getFilterBuilderTab(): FilterBuilderTab;
    getIsUrl(): boolean;
    dataType: string;
    displayName: string;
    parameterName: string;
    field: string;
    siteAreas: SiteArea[];
    filterBuilderTab: FilterBuilderTab;
    groupingKey: string;
    isUrl: boolean;
    isMemberOfSiteArea(area: SiteArea): boolean;
    static all: ClickhouseParameter[];
    static getByName(parameterName: string): ClickhouseParameter;
    static getByTab(tab: FilterBuilderTab): ClickhouseParameter[];
    static constructFromServer(serverParameters: ClickhouseServerParameter[]): void;
}
