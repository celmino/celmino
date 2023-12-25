import { Optional } from "@tuval/core";
import { ColorClass, FieldSettingsModel, UIView, ValidateRule } from "@tuval/forms";
export declare const Theme: {
    primaryBackgroundHoverColor: string;
    primaryColor: string;
    fontFamily: string;
    applicationBackgroundColor: string;
    textColorOnPrimary: string;
    surfceColor: string;
    darkBackgroundColor: string;
    secondaryBackgroundColor: string;
};
export declare const fontFamily = "-apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Helvetica\", \"Apple Color Emoji\", \"Arial\", sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"";
export interface ITableViewColumn {
    title?: string;
    key?: string;
    width?: string;
    view?: (row: any) => UIView;
}
export interface IAction {
    title?: string;
    icon: string;
    iconColor?: ColorClass | string;
    tooltip: string;
    link?: string;
    action?: Function;
    linkState?: any;
}
export interface IDropDownParams {
    label: string;
    dataSource: any[];
    fields: FieldSettingsModel;
    placeholder: string;
    formFieldOptions: {
        fieldName: string;
        rules: ValidateRule[];
    };
}
export declare namespace Views {
    const DropDown: (params: Optional<IDropDownParams>) => import("@tuval/forms").VStackClass;
    const EmptyTableView: <T>(columns: ITableViewColumn[], data: T[], rowClick?: Function) => import("@tuval/forms").VStackClass;
    const TableView: <T>(columns: ITableViewColumn[], data: T[], rowClick?: Function) => import("@tuval/forms").VStackClass;
    const FormView: ({ header, content }: {
        header: string;
        content: UIView;
    }) => import("@tuval/forms").VStackClass;
    const CreateButton: ({ label, action }: {
        label: string;
        action: Function;
    }) => import("@tuval/forms").HStackClass;
    const ExportButton: ({ label, action }: {
        label: string;
        action: Function;
    }) => import("@tuval/forms").HStackClass;
    const DeleteButton: ({ label, action }: {
        label: string;
        action: Function;
    }) => import("@tuval/forms").HStackClass;
    const AcceptButton: ({ label, loading, action }: {
        label: string;
        loading?: boolean;
        action: Function;
    }) => import("@tuval/forms").ButtonClass;
    const _AcceptButton: ({ label, action }: {
        label: string;
        action: Function;
    }) => import("@tuval/forms").HStackClass;
    const ActionBar: (actions: IAction[]) => import("@tuval/forms").HStackClass;
    const ActionContextMenu: (actions: IAction[]) => import("@tuval/forms").UIContextMenuClass;
    const DashboardTile: (title: string, value: string, icon: any, iconColor: ColorClass, iconBackColor: ColorClass) => import("@tuval/forms").VStackClass;
    const DashboardTileBox: (title: string, content: UIView) => import("@tuval/forms").VStackClass;
    const EditablePageTitle: (title: string | UIView, onChange?: Function) => import("@tuval/forms").VStackClass;
    const PageTitle: (title: string | UIView) => import("@tuval/forms").VStackClass;
    const RightSidePage: ({ showBackIcon, title, copyId, tabview, content, maxWidth }: {
        title: string | UIView;
        showBackIcon?: boolean;
        copyId?: {
            value: string;
            label: string;
        };
        tabview?: UIView;
        content: UIView;
        maxWidth?: string;
    }) => any;
    const AcceptRouteButton: ({ label, link }: {
        label: string;
        link: string;
    }) => import("@tuval/forms").UIRouteLinkClass;
    const TabView: (tabModel: any[]) => import("@tuval/forms").VStackClass;
    const FormCommanSection: ({ title, content, footer }: {
        title: any;
        content: any;
        footer?: any;
    }) => import("@tuval/forms").VStackClass;
    const FormDangerSection: ({ title, subTitle, content, footer }: {
        title: any;
        subTitle: any;
        content: any;
        footer: any;
    }) => import("@tuval/forms").HStackClass;
    const CompanyTabView: () => import("@tuval/forms").VStackClass;
    const EmployeeEditTabView: () => import("@tuval/forms").VStackClass;
}
