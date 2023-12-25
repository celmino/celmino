import { Models } from '../../sdk-console';
/**
* Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address.
* Both the userId and secret arguments will be passed as query parameters to the URL you have provided to be attached to the verification email.
* The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying
* both the userId and secret parameters. Learn more about how to complete the verification process.
* The verification link sent to the user's email address is valid for 7 days.
* Please note that in order to avoid a Redirect Attack, the only valid redirect
* URLs are the ones from domains you have set when adding your platforms in the console interface.
*/
export declare const useCreateEmailVerification: () => {
    createVerification: ({ url }: {
        /**
         * The email address of the account.
         */
        url: string;
    }, onSuccess?: (data: Models.Token) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
