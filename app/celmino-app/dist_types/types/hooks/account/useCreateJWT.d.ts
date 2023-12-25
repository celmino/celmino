import { Models } from '../../sdk-console';
/**
* Use this endpoint to create a JSON Web Token.
* You can use the resulting JWT to authenticate on behalf of the current user when working with the Celmino server-side API and SDKs.
* The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
*/
export declare const useCreateJWT: () => {
    createJWT: (onSuccess?: (data: Models.Jwt) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
