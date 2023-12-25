import React from 'react';
type BoardSectionProps = {
    id: string;
    title: string;
    items: any[];
    status: any;
};
export declare const SaveItemAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
declare function BoardSection({ id, items, status }: BoardSectionProps): React.JSX.Element;
export default BoardSection;
