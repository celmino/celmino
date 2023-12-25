import { Models } from '../../sdk-console';
/**
 * Use this endpoint to allow a new user to register a new account.
 * After the user registration completes successfully, you can use the /account/verfication route to start verifying the user email address.
 * To allow the new user to login to their new account, you need to create a new account session.
 */
export declare const useCreateScryptModifiedUser: () => {
    createScryptModifiedUser: ({ userId, email, password, passwordSalt, passwordSaltSeparator, passwordSignerKey, name }: {
        userId: string;
        email: string;
        password: string;
        passwordSalt: string;
        passwordSaltSeparator: string;
        passwordSignerKey: string;
        name?: string;
    }, onSuccess?: <Preferences extends Models.Preferences>(data: Models.Account<Preferences>) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
