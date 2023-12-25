import { Models } from '../../sdk-console';
/**
* Sends the user an SMS with a secret key for creating a session.
* If the provided user ID has not be registered, a new user will be created.
* Use the returned user ID and secret and submit a request to the PUT /account/sessions/phone endpoint to complete the login process.
* The secret sent to the user's phone is valid for 15 minutes.
* A user is limited to 10 active sessions at a time by default. Learn more about session limits.
*/
export declare const useCreatePhoneSession: () => {
    createPhoneSession: ({ userId, phone }: {
        /**
         * The email address of the account.
         */
        userId: string;
        /**
         * The password of the account.
         */
        phone: string;
    }, onSuccess?: (data: Models.Token) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
