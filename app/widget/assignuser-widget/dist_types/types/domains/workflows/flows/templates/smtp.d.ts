export declare const smtp: {
    $schema: string;
    name: string;
    id: string;
    description: string;
    appliesTo: string[];
    documentationRef: string;
    icon: {
        contents: string;
    };
    properties: ({
        label: string;
        id: string;
        group: string;
        description: string;
        value: string;
        type: string;
        choices: {
            name: string;
            value: string;
        }[];
        binding: {
            type: string;
            name: string;
        };
        constraints?: undefined;
    } | {
        type: string;
        value: string;
        binding: {
            type: string;
            name?: undefined;
        };
        label?: undefined;
        id?: undefined;
        group?: undefined;
        description?: undefined;
        choices?: undefined;
        constraints?: undefined;
    } | {
        label: string;
        type: string;
        binding: {
            type: string;
            name: string;
        };
        constraints: {
            notEmpty: boolean;
        };
        id?: undefined;
        group?: undefined;
        description?: undefined;
        value?: undefined;
        choices?: undefined;
    } | {
        label: string;
        type: string;
        binding: {
            type: string;
            name: string;
        };
        id?: undefined;
        group?: undefined;
        description?: undefined;
        value?: undefined;
        choices?: undefined;
        constraints?: undefined;
    })[];
};
