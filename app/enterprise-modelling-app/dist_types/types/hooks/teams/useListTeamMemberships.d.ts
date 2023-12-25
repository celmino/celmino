/**
 * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address,
 * location and date and time of log.
 */
export declare const useListTeamMemberships: (teamId: string, queries?: string[], search?: string) => {
    memberships: import("../../sdk-console").Models.MembershipList;
    isLoading: boolean;
};
