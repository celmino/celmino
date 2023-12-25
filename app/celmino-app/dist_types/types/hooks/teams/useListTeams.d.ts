/**
 * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address,
 * location and date and time of log.
 */
export declare const useListTeams: (queries?: string[], search?: string) => {
    teams: import("../../sdk-console").Models.Team<import("../../sdk-console").Models.Preferences>[];
    total: number;
    isLoading: boolean;
};
