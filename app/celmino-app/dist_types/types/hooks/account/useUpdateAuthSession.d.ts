import { Models } from '../../sdk-console';
/**
 * Access tokens have limited lifespan and expire to mitigate security risks.
 * If session was created using an OAuth provider, this route can be used to "refresh" the access token.
 */
export declare const useUpdateAuthSession: () => {
    updateSession: ({ sessionId }: {
        /**
         * The email address of the account.
         */
        sessionId: string;
    }, onSuccess?: (data: Models.Session) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
