/**
 * Get the list of identities for the currently logged in user.
 */
export declare const useGetIdentities: () => {
    identities: import("../../sdk-console").Models.IdentityList;
    isLoading: boolean;
};
