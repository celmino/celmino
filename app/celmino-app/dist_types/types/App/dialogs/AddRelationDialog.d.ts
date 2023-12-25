export declare const SaveRelationFieldAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const SelectDBCollectionView: (textData: any) => import("@tuval/forms").VStackClass;
export declare const AddRelationFieldDialog: (workspaceId: string, databaseId: string, collectionId: string) => {
    title: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        workspaceId: {
            name: string;
            type: string;
            value: string;
        };
        databaseId: {
            name: string;
            type: string;
            value: string;
        };
        collectionId: {
            name: string;
            type: string;
            value: string;
        };
        name: {
            label: string;
            type: string;
            name: string;
        };
        description: {
            label: string;
            type: string;
            multiline: boolean;
            name: string;
        };
        selectCollection: {
            label: string;
            type: string;
            name: string;
        };
    };
};
