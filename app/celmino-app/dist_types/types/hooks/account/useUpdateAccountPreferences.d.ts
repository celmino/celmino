import { Models } from '../../sdk-console';
/**
* Update currently logged in user account preferences.
* The object you pass is stored as is, and replaces any previous value.
* The maximum allowed prefs size is 64kB and throws error if exceeded.
*/
export declare const useUpdateAccountPreferences: <Preferences extends Models.Preferences>() => {
    useUpdateAccountPreferences: ({ prefs }: {
        /**
         *
         */
        prefs: Partial<Preferences>;
    }, onSuccess?: (data: Models.User<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
