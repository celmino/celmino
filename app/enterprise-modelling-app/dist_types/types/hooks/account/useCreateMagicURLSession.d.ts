import { Models } from '../../sdk-console';
/**
 * Sends the user an email with a secret key for creating a session.
 * If the provided user ID has not been registered, a new user will be created.
 * When the user clicks the link in the email,
 * the user is redirected back to the URL you provided with the secret key and userId values attached to the
 * URL query string. Use the query string parameters to submit a request to the PUT /account/sessions/magic-url endpoint
 * to complete the login process. The link sent to the user's email address is valid for 1 hour.
 * If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your
 * Celmino instance by default. A user is limited to 10 active sessions at a time by default. Learn more about session limits.
 */
export declare const useCreateMagicURLSession: () => {
    createMagicURLSession: ({ userId, email, url }: {
        /**
         * The email address of the account.
         */
        userId: string;
        /**
         * The password of the account.
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
