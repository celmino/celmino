export declare const AddNumberFieldDialog: (onAction: Function) => {
    title: string;
    actions: {
        label: string;
        onAction: Function;
        type: string;
    }[];
    fieldMap: {
        type: {
            name: string;
            type: string;
            value: string;
        };
        key: {
            label: string;
            type: string;
            name: string;
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
    };
};
