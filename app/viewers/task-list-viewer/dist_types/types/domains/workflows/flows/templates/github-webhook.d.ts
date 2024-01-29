export declare const webhook: {
    $schema: string;
    name: string;
    id: string;
    appliesTo: string[];
    groups: {
        id: string;
        label: string;
    }[];
    properties: ({
        type: string;
        value: string;
        binding: {
            type: string;
            name: string;
        };
        label?: undefined;
        group?: undefined;
        description?: undefined;
        optional?: undefined;
        feel?: undefined;
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
        optional?: undefined;
        feel?: undefined;
    } | {
        label: string;
        type: string;
        group: string;
        optional: boolean;
        binding: {
            type: string;
            name: string;
        };
        description: string;
        value?: undefined;
        feel?: undefined;
    } | {
        label: string;
        type: string;
        group: string;
        feel: string;
        optional: boolean;
        binding: {
            type: string;
            name: string;
        };
        description: string;
        value?: undefined;
    } | {
        label: string;
        type: string;
        group: string;
        feel: string;
        binding: {
            type: string;
            name: string;
        };
        description: string;
        value?: undefined;
        optional?: undefined;
    })[];
    icon: {
        contents: string;
    };
};
