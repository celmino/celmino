export declare const AddSpaceDialog: () => {
    title: string;
    method: string;
    resource: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        space_name: {
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
    };
};
