import { UIView, UIFormController } from '@tuval/forms';
import React from 'react';
export interface IOPA {
    name: string;
    content: string;
    onSave: Function;
    controller: Function;
}
export declare class OPA extends React.Component<any, any> {
    get Name(): string;
    constructor(props: any);
    render(): React.ReactNode;
}
export declare function getAppName(): any;
export declare const Paths: {};
export declare const OpaLoader: ({ opa_name }: {
    opa_name: any;
}) => JSX.Element;
export declare class OPAController extends UIFormController {
    LoadView(): UIView;
}
