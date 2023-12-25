export declare const nncrm_hooks: {
    $schema: string;
    name: string;
    id: string;
    description: string;
    appliesTo: string[];
    documentationRef: string;
    icon: {
        contents: string;
    };
    properties: {
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
    }[];
};
