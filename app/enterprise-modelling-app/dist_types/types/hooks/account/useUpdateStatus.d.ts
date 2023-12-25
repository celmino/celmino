import { Models } from '../../sdk-console';
/**
* Block the currently logged in user account.
* Behind the scene, the user record is not deleted but permanently blocked from any access.
* To completely delete a user, use the Users API instead.
*/
export declare const useUpdateStatus: () => {
    updateStatus: (onSuccess?: <Preferences extends Models.Preferences>(data: Models.User<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
