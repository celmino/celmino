import { Models } from '../../sdk-console';
/**
* Use this endpoint to complete the user account password reset.
* Both the userId and secret arguments will be passed as query parameters to the redirect URL you have provided
* when sending your request to the POST /account/recovery endpoint.
* Please note that in order to avoid a Redirect Attack the only valid
* redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
*/
export declare const useUpdatePhoneSession: () => {
    updatePhoneSession: ({ userId, secret }: {
        userId: string;
        secret: string;
    }, onSuccess?: (data: Models.Session) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
