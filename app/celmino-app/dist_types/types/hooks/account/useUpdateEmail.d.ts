import { Models } from '../../sdk-console';
/**
 * Update currently logged in user account email address.
 * After changing user address, the user confirmation status will get reset. A new confirmation
 * email is not sent automatically however you can use the send confirmation email endpoint again
 * to send the confirmation email.
 * For security measures, user password is required to complete this request.
 * This endpoint can also be used to convert an anonymous account to a normal one,
 * by passing an email address and a new password.
 */
export declare const useUpdateEmail: () => {
    updateEmail: ({ email, password }: {
        /**
         * The email address of the account.
         */
        email: string;
        /**
         * The password of the account.
         */
        password: string;
    }, onSuccess?: <Preferences extends Models.Preferences>(data: Models.User<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
