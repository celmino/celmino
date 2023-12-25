import { UIView } from "@tuval/forms";

export interface IConfig {
    objectId: string;
    objectViewId: string;
    selectedViewIndex: number;
    fields: any[];
    views: any[];
    objectViews: any[],
    powerUps: any[];
    header: string | (() => UIView);
    onHeaderChange?: (header: string) => void;
    description: any;
    onDescriptionChange?: (value: string) => void;
}