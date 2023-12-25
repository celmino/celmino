import { Models } from '../../sdk-console';
/**
* Update currently logged in user account name.
*/
export declare const useUpdateName: () => {
    updateName: ({ name }: {
        /**
         * The name of the account.
         */
        name: string;
    }, onSuccess?: <Preferences extends Models.Preferences>(data: Models.User<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
