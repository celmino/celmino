export declare const github: {
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
        type: string;
        value: string;
        binding: {
            type: string;
            name?: undefined;
        };
        label?: undefined;
        group?: undefined;
        description?: undefined;
        constraints?: undefined;
    } | {
        label: string;
        type: string;
        group: string;
        binding: {
            type: string;
            name: string;
        };
        description: string;
        value?: undefined;
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
        value?: undefined;
        group?: undefined;
        description?: undefined;
    } | {
        label: string;
        type: string;
        binding: {
            type: string;
            name: string;
        };
        value?: undefined;
        group?: undefined;
        description?: undefined;
        constraints?: undefined;
    })[];
};
