export declare const databaseTemplates: {
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
