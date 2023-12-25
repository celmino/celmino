/**
 * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address,
 * location and date and time of log.
 */
export declare const useListTeamLogs: (teamId: string, queries?: string[]) => {
    logs: import("../../sdk-console").Models.LogList;
    isLoading: boolean;
};
