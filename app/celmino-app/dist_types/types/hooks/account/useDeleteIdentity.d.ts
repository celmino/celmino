/**
 * Delete an identity by its unique ID.
 */
export declare const useDeleteIdentity: () => {
    deleteIdentity: ({ identityId }: {
        /**
         * ID.
         */
        identityId: string;
    }, onSuccess?: () => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
