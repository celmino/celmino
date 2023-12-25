export declare const Applets: ({
    name: string;
    type: string;
    description: string;
    icon: string;
    enabled: boolean;
    databases: {
        name: string;
        id: string;
        category: string;
        collections: ({
            name: string;
            id: string;
            attributes: {
                key: string;
                type: string;
            }[];
            documents?: undefined;
        } | {
            name: string;
            id: string;
            attributes: {
                key: string;
                type: string;
            }[];
            documents: {
                Name: string;
                TypeNumber: number;
                ApiName: string;
                Type: string;
            }[];
        })[];
    }[];
} | {
    name: string;
    type: string;
    description: string;
    icon: string;
    enabled: boolean;
    databases?: undefined;
})[];
