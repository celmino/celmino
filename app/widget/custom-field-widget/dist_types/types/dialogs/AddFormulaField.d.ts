export declare const AddFormulaField: (onAction: Function) => {
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
            category: string;
        };
        name: {
            label: string;
            type: string;
            name: string;
            category: string;
        };
        description: {
            label: string;
            type: string;
            multiline: boolean;
            name: string;
            category: string;
        };
        formula: {
            label: string;
            type: string;
            multiline: boolean;
            name: string;
            category: string;
        };
        required: {
            label: string;
            type: string;
            name: string;
            category: string;
        };
    };
    layout: {
        type: string;
    };
};
