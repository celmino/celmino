import { Models } from '../../sdk-console';
/**
 * Use this endpoint to allow a new user to register a new account.
 * After the user registration completes successfully, you can use the /account/verfication route to start verifying the user email address.
 * To allow the new user to login to their new account, you need to create a new account session.
 */
export declare const useUpdateTeamMembershipStatus: () => {
    updateTeamMembershipStatus: ({ teamId, membershipId, userId, secret }: {
        teamId: string;
        membershipId: string;
        userId: string;
        secret: string;
    }, onSuccess?: (data: Models.Membership) => void) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: {
        message: string;
    };
};
