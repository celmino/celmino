import { Models } from '../../sdk-console';
export declare const useCreateOrganization: () => {
    createOrganization: (name: string, onSuccess: <Preferences extends Models.Preferences>(data: Models.Team<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
