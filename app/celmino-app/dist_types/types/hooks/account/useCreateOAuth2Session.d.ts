/**
* Allow the user to login to their account using the OAuth2 provider of their choice.
* Each OAuth2 provider should be enabled from the Celmino console first.
* Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.
* If there is already an active session, the new session will be attached to the logged-in account.
* If there are no active sessions, the server will attempt to look for a user with the same email
* address as the email received from the OAuth2 provider and attach the new session to the existing user.
* If no matching user is found - the server will create a new user.
* A user is limited to 10 active sessions at a time by default. Learn more about session limits.
*/
export declare const useCreateOAuth2Session: () => {
    createOAuth2Session: ({ provider, success, failure, scopes }: {
        provider: string;
        success?: string;
        failure?: string;
        scopes?: string[];
    }, onSuccess?: (data: void | URL) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
