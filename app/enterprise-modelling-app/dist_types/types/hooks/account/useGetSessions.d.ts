/**
 * Get the list of active sessions across different devices for the currently logged in user.
 */
export declare const useGetSessions: () => {
    sessions: import("../../sdk-console").Models.SessionList;
    isLoading: boolean;
};
