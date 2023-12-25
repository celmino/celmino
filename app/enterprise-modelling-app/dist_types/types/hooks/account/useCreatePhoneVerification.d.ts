import { Models } from '../../sdk-console';
/**
* Use this endpoint to send a verification SMS to the currently logged in user.
* This endpoint is meant for use after updating a user's phone number using the accountUpdatePhone endpoint.
* Learn more about how to complete the verification process. The verification code sent to the user's phone number is valid for 15 minutes.
*/
export declare const useCreatePhoneVerification: () => {
    createPhoneVerification: ({ url }: {
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
