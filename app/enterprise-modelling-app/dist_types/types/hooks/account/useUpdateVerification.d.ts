import { Models } from '../../sdk-console';
/**
* Use this endpoint to complete the user email verification process.
* Use both the userId and secret parameters that were attached to your app URL to verify the user email ownership.
* If confirmed this route will return a 200 status code.
*/
export declare const useUpdateVerification: () => {
    updateVerification: ({ userId, secret }: {
        userId: string;
        secret: string;
    }, onSuccess?: (data: Models.Token) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
