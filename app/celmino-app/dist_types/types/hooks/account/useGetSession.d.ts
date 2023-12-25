/**
 * Use this endpoint to get a logged in user's session using a Session ID.
 * Inputting 'current' will return the current session being used.
 */
export declare const useGetSession: (sessionId?: string) => {
    session: import("../../sdk-console").Models.Session;
    isLoading: boolean;
};
