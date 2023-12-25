import { Models } from '../../sdk-console';
/**
* Sends the user an email with a temporary secret key for password reset.
* When the user clicks the confirmation link he is redirected back to your app password
* reset URL with the secret key and email address values attached to the URL query string.
* Use the query string params to submit a request to the PUT /account/recovery endpoint to complete the process.
* The verification link sent to the user's email address is valid for 1 hour.
*/
export declare const useCreateRecovery: () => {
    createRecovery: ({ email, url }: {
        /**
         * The name of the account.
         */
        email: string;
        url: string;
    }, onSuccess?: (data: Models.Token) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
