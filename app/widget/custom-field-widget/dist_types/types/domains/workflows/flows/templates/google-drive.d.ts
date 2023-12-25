export declare const google_drive: {
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
    } | {
        label: string;
        type: string;
        binding: {
            type: string;
            name: string;
        };
        value?: undefined;
        constraints?: undefined;
    })[];
};
