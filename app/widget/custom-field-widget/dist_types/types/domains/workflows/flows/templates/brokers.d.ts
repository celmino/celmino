export declare const brokers: {
    $schema: string;
    name: string;
    id: string;
    description: string;
    icon: {
        contents: string;
    };
    documentationRef: string;
    category: {
        id: string;
        name: string;
    };
    appliesTo: string[];
    elementType: {
        value: string;
    };
    groups: {
        id: string;
        label: string;
    }[];
    properties: ({
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
        feel?: undefined;
        constraints?: undefined;
        condition?: undefined;
    } | {
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
        feel?: undefined;
        constraints?: undefined;
        condition?: undefined;
    } | {
        label: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
        };
        constraints: {
            notEmpty: boolean;
        };
        condition: {
            property: string;
            equals: string;
        };
        value?: undefined;
        id?: undefined;
        description?: undefined;
        choices?: undefined;
    })[];
}[];
