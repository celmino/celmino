/**
* Delete all sessions from the user account and remove any sessions cookies from the end client.
*/
export declare const useDeleteSessions: () => {
    deleteSessions: (onSuccess?: () => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
