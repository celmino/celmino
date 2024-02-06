import { UIFormController, UIView } from '@tuval/forms';
import React from 'react';
export interface IOPA {
    name: string;
    content: string;
    onSave: Function;
    controller: Function;
}
export declare class OPA extends React.Component<IOPA, any> {
    get Name(): string;
    constructor(props: any);
    render(): React.ReactNode;
}
export declare function getAppName(): any;
export declare const Paths: {};
export declare const OpaLoader: ({ view_qn, content, onSave }: {
    view_qn: any;
    content: any;
    onSave: any;
}) => JSX.Element;
export declare class ViewController extends UIFormController {
    LoadView(): UIView;
}
