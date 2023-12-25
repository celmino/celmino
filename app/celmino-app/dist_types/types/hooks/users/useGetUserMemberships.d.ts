/**
 * Get the list of identities for the currently logged in user.
 */
export declare const useGetUserMemberships: (userId: string) => {
    memberships: import("../../sdk-console").Models.MembershipList;
    isLoading: boolean;
};
