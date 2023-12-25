import { Models } from '../../sdk-console';
/**
* Update currently logged in user password.
* For validation, user is required to pass in the new password, and the old password.
* For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.
*/
export declare const useUpdatePassword: () => {
    updatePassword: ({ password, oldPassword }: {
        /**
         * The new password of the account.
         */
        password: string;
        /**
        * The old password of the account.
        */
        oldPassword: string;
    }, onSuccess?: <Preferences extends Models.Preferences>(data: Models.User<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
