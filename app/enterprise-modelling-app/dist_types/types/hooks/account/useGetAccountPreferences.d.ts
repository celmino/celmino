/**
 * Get the preferences as a key-value object for the currently logged in user.
 */
export declare const useGetAccountPreferences: () => {
    preferences: import("../../sdk-console").Models.User<import("../../sdk-console").Models.Preferences>;
    isLoading: boolean;
};
