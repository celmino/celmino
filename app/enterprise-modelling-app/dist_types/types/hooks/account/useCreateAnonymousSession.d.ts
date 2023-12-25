/**
* Use this hook to allow a new user to register an anonymous account in your project.
* This route will also create a new session for the user.
* To allow the new user to convert an anonymous account to a normal account,
* you need to update its email and password or create an OAuth2 session.
*/
export declare const useCreateAnonymousSession: () => {
    createAnonymousSession: (onSuccess?: () => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
