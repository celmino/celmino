import { UIView, UIFormController } from '@tuval/forms';
import React from 'react';
export interface IOPA {
    name: string;
    content: string;
    controller: Function;
}
export declare class OPA extends React.Component<IOPA, any> {
    get Name(): string;
    constructor(props: any);
    render(): React.ReactNode;
}
export declare function getAppName(): any;
export declare const Paths: {};
export declare const OpaLoader: ({ content }: {
    content: any;
}) => JSX.Element;
export declare class OPAController extends UIFormController {
    LoadView(): UIView;
}
