export declare const AddFolderDialog: (spaceId: string) => {
    title: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        spaceId: {
            name: string;
            type: string;
            value: string;
        };
        folder_name: {
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
