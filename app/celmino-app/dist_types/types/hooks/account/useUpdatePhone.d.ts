import { Models } from '../../sdk-console';
/**
* Update the currently logged in user's phone number.
* After updating the phone number, the phone verification status will be reset.
* A confirmation SMS is not sent automatically, however you can use the POST /account/verification/phone endpoint to send a confirmation SMS.
*/
export declare const useUpdatePhone: () => {
    updatePhone: ({ phone, password }: {
        /**
         * The new password of the account.
         */
        phone: string;
        /**
        * The old password of the account.
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
