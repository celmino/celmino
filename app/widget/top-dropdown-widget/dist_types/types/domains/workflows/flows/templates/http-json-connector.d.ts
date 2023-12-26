export declare const http_json_connector: ({
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
            key?: undefined;
        };
        label?: undefined;
        id?: undefined;
        group?: undefined;
        description?: undefined;
        choices?: undefined;
        feel?: undefined;
        constraints?: undefined;
        optional?: undefined;
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
            key?: undefined;
        };
        feel?: undefined;
        constraints?: undefined;
        optional?: undefined;
        condition?: undefined;
    } | {
        id: string;
        label: string;
        group: string;
        type: string;
        value: string;
        choices: {
            name: string;
            value: string;
        }[];
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        description?: undefined;
        feel?: undefined;
        constraints?: undefined;
        optional?: undefined;
        condition?: undefined;
    } | {
        label: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        constraints: {
            notEmpty: boolean;
            pattern: {
                value: string;
                message: string;
            };
        };
        value?: undefined;
        id?: undefined;
        description?: undefined;
        choices?: undefined;
        optional?: undefined;
        condition?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        optional: boolean;
        value?: undefined;
        id?: undefined;
        choices?: undefined;
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
            key?: undefined;
        };
        constraints: {
            notEmpty: boolean;
            pattern?: undefined;
        };
        condition: {
            property: string;
            equals: string;
            oneOf?: undefined;
        };
        value?: undefined;
        id?: undefined;
        description?: undefined;
        choices?: undefined;
        optional?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        condition: {
            property: string;
            oneOf: string[];
            equals?: undefined;
        };
        optional: boolean;
        value?: undefined;
        id?: undefined;
        choices?: undefined;
        constraints?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        binding: {
            type: string;
            key: string;
            name?: undefined;
        };
        value?: undefined;
        id?: undefined;
        choices?: undefined;
        feel?: undefined;
        constraints?: undefined;
        optional?: undefined;
        condition?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            key: string;
            name?: undefined;
        };
        value?: undefined;
        id?: undefined;
        choices?: undefined;
        constraints?: undefined;
        optional?: undefined;
        condition?: undefined;
    })[];
} | {
    $schema: string;
    name: string;
    id: string;
    description: string;
    documentationRef: string;
    icon: {
        contents: string;
    };
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
            key?: undefined;
        };
        label?: undefined;
        group?: undefined;
        choices?: undefined;
        feel?: undefined;
        constraints?: undefined;
        description?: undefined;
        optional?: undefined;
    } | {
        label: string;
        group: string;
        type: string;
        value: string;
        choices: {
            name: string;
            value: string;
        }[];
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        feel?: undefined;
        constraints?: undefined;
        description?: undefined;
        optional?: undefined;
    } | {
        label: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        constraints: {
            notEmpty: boolean;
            pattern: {
                value: string;
                message: string;
            };
        };
        value?: undefined;
        choices?: undefined;
        description?: undefined;
        optional?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        optional: boolean;
        value?: undefined;
        choices?: undefined;
        constraints?: undefined;
    } | {
        type: string;
        value: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        label?: undefined;
        group?: undefined;
        choices?: undefined;
        feel?: undefined;
        constraints?: undefined;
        description?: undefined;
        optional?: undefined;
    } | {
        label: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            name: string;
            key?: undefined;
        };
        constraints: {
            notEmpty: boolean;
            pattern?: undefined;
        };
        value?: undefined;
        choices?: undefined;
        description?: undefined;
        optional?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        binding: {
            type: string;
            key: string;
            name?: undefined;
        };
        value?: undefined;
        choices?: undefined;
        feel?: undefined;
        constraints?: undefined;
        optional?: undefined;
    } | {
        label: string;
        description: string;
        group: string;
        type: string;
        feel: string;
        binding: {
            type: string;
            key: string;
            name?: undefined;
        };
        value?: undefined;
        choices?: undefined;
        constraints?: undefined;
        optional?: undefined;
    })[];
})[];
