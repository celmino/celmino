import { Models } from '../../sdk-console';
/**
* Allow the user to login into their account by providing a valid email and password combination.
* This route will create a new session for the user. A user is limited to 10 active sessions at a time by default.
* Learn more about session limits.
*/
export declare const useCreateEmailSession: () => {
    createEmailSession: ({ email, password }: {
        /**
         * The email address of the account.
         */
        email: string;
        /**
         * The password of the account.
         */
        password: string;
    }, onSuccess?: (data: Models.Session) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
