import { UIFormController } from "@tuval/forms";
import React from "react";
export declare const Paths: {};
export declare class Widget extends React.Component<any, any> {
    get Name(): string;
    constructor(props: any);
    render(): React.ReactNode;
}
export declare const WidgetLoader: ({ widget, content, onSave }: {
    widget: any;
    content: any;
    onSave: any;
}) => JSX.Element;
export declare class _HomeController extends UIFormController {
    LoadView(): any;
}
