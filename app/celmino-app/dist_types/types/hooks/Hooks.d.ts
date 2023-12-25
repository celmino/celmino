export declare namespace Hooks {
    const Account: {
        useCreateAccount: () => {
            createAccount: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateAnonymousSession: () => {
            createAnonymousSession: (onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateEmailSession: () => {
            createEmailSession: ({ email, password }: {
                email: string;
                password: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Session) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateEmailVerification: () => {
            createVerification: ({ url }: {
                url: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateJWT: () => {
            createJWT: (onSuccess?: (data: import("../sdk-console").Models.Jwt) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateMagicURLSession: () => {
            createMagicURLSession: ({ userId, email, url }: {
                userId: string;
                email: string;
                url: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateOAuth2Session: () => {
            createOAuth2Session: ({ provider, success, failure, scopes }: {
                provider: string;
                success?: string;
                failure?: string;
                scopes?: string[];
            }, onSuccess?: (data: void | URL) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreatePhoneSession: () => {
            createPhoneSession: ({ userId, phone }: {
                userId: string;
                phone: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreatePhoneVerification: () => {
            createPhoneVerification: ({ url }: {
                url: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateRecovery: () => {
            createRecovery: ({ email, url }: {
                email: string;
                url: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteIdentity: () => {
            deleteIdentity: ({ identityId }: {
                identityId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteSessions: () => {
            deleteSessions: (onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetAccountPreferences: () => {
            preferences: import("../sdk-console").Models.User<import("../sdk-console").Models.Preferences>;
            isLoading: boolean;
        };
        useGetIdentities: () => {
            identities: import("../sdk-console").Models.IdentityList;
            isLoading: boolean;
        };
        useGetLogs: () => {
            logs: import("../sdk-console").Models.LogList;
            isLoading: boolean;
        };
        useGetMe: () => {
            me: import("../sdk-console").Models.User<import("../sdk-console").Models.Preferences>;
            isLoading: boolean;
        };
        useGetSession: (sessionId?: string) => {
            session: import("../sdk-console").Models.Session;
            isLoading: boolean;
        };
        useGetSessions: () => {
            sessions: import("../sdk-console").Models.SessionList;
            isLoading: boolean;
        };
        useUpdateAccountPreferences: <Preferences_1 extends import("../sdk-console").Models.Preferences>() => {
            useUpdateAccountPreferences: ({ prefs }: {
                prefs: Partial<Preferences_1>;
            }, onSuccess?: (data: import("../sdk-console").Models.User<Preferences_1>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateAuthSession: () => {
            updateSession: ({ sessionId }: {
                sessionId: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Session) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateEmail: () => {
            updateEmail: ({ email, password }: {
                email: string;
                password: string;
            }, onSuccess?: <Preferences_2 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_2>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateMagicURLSession: () => {
            updateMagicURLSession: ({ userId, secret }: {
                userId: string;
                secret: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Session) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateName: () => {
            updateName: ({ name }: {
                name: string;
            }, onSuccess?: <Preferences_3 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_3>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdatePassword: () => {
            updatePassword: ({ password, oldPassword }: {
                password: string;
                oldPassword: string;
            }, onSuccess?: <Preferences_4 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_4>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdatePhone: () => {
            updatePhone: ({ phone, password }: {
                phone: string;
                password: string;
            }, onSuccess?: <Preferences_5 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_5>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdatePhoneSession: () => {
            updatePhoneSession: ({ userId, secret }: {
                userId: string;
                secret: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Session) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdatePhoneVerification: () => {
            updatePhoneVerification: ({ userId, secret }: {
                userId: string;
                secret: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateRecovery: () => {
            updateRecovery: ({ userId, secret, password, passwordAgain }: {
                userId: string;
                secret: string;
                password: string;
                passwordAgain: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateStatus: () => {
            updateStatus: (onSuccess?: <Preferences_6 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_6>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateVerification: () => {
            updateVerification: ({ userId, secret }: {
                userId: string;
                secret: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Token) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
    };
    const Users: {
        useCreateArgon2User: () => {
            createArgon2User: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateBcryptUser: () => {
            createBcryptUser: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences_1 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_1>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateMD5User: () => {
            createMD5User: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences_2 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_2>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreatePHPassUser: () => {
            createPHPassUser: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences_3 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_3>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateScryptModifiedUser: () => {
            createScryptModifiedUser: ({ userId, email, password, passwordSalt, passwordSaltSeparator, passwordSignerKey, name }: {
                userId: string;
                email: string;
                password: string;
                passwordSalt: string;
                passwordSaltSeparator: string;
                passwordSignerKey: string;
                name?: string;
            }, onSuccess?: <Preferences_4 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_4>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateScryptUser: () => {
            createScryptUser: ({ userId, email, password, passwordSalt, passwordCpu, passwordMemory, passwordParallel, passwordLength, name }: {
                userId: string;
                email: string;
                password: string;
                passwordSalt: string;
                passwordCpu: number;
                passwordMemory: number;
                passwordParallel: number;
                passwordLength: number;
                name?: string;
            }, onSuccess?: <Preferences_5 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_5>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateSHAUser: () => {
            createSHAUser: ({ name, email, password }: {
                name: string;
                email: string;
                password: string;
            }, onSuccess?: <Preferences_6 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Account<Preferences_6>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateUser: () => {
            createUser: ({ email, phone, password, name }: {
                email: string;
                phone: string;
                password: string;
                name: string;
            }, onSuccess?: <Preferences_7 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.User<Preferences_7>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteUser: () => {
            deleteUser: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteUserIdentity: () => {
            deleteUserIdentity: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteUserSession: () => {
            deleteUserSession: ({ userId, sessionId }: {
                userId: string;
                sessionId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteUserSessions: () => {
            deleteUserSessions: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetUser: () => {
            getUser: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetUserPrefs: () => {
            getUserPrefs: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetUserUsage: () => {
            getUserUsage: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useListUserIdentities: () => {
            listUserIdentities: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useListUserLogs: () => {
            listUserLogs: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetUserMemberships: (userId: string) => {
            memberships: import("../sdk-console").Models.MembershipList;
            isLoading: boolean;
        };
        useListUsers: () => {
            listUsers: ({ queries, search }: {
                queries?: string[];
                search?: string;
            }, onSuccess?: <Preferences_8 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.UserList<Preferences_8>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useListUserSessions: () => {
            listUserSessions: ({ userId }: {
                userId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserEmail: () => {
            updateUserEmail: ({ userId, email }: {
                userId: string;
                email: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserEmailVerification: () => {
            updateUserEmailVerification: ({ userId, emailVerification }: {
                userId: string;
                emailVerification: boolean;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserLabels: () => {
            updateUserLabels: ({ userId, labels }: {
                userId: string;
                labels: string[];
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserName: () => {
            updateUserName: ({ userId, name }: {
                userId: string;
                name: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserPassword: () => {
            updateUserPassword: ({ userId, password }: {
                userId: string;
                password: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserPhone: () => {
            updateUserPhone: ({ userId, number }: {
                userId: string;
                number: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserPhoneVerification: () => {
            updateUserPhoneVerification: ({ userId, phoneVerification }: {
                userId: string;
                phoneVerification: boolean;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserPrefs: () => {
            updateUserPrefs: ({ userId, prefs }: {
                userId: string;
                prefs: object;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateUserStatus: () => {
            updateUserStatus: ({ userId, status }: {
                userId: string;
                status: boolean;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
    };
    const Teams: {
        useCreateTeam: () => {
            createTeam: ({ name, roles }: {
                name: string;
                roles?: string[];
            }, onSuccess?: <Preferences extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Team<Preferences>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useCreateTeamMembership: () => {
            createTeamMembership: ({ teamId, roles, url, email, userId, phone, name }: {
                teamId: string;
                roles: string[];
                url: string;
                email?: string;
                userId?: string;
                phone?: string;
                name?: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Membership) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteTeam: () => {
            createTeam: ({ teamId }: {
                teamId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useDeleteTeamMembership: () => {
            deleteTeamMembership: ({ teamId, membershipId }: {
                teamId: string;
                membershipId: string;
            }, onSuccess?: () => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useGetTeam: (teamId: string) => {
            team: import("../sdk-console").Models.Team<import("../sdk-console").Models.Preferences>;
            isLoading: boolean;
        };
        useGetTeamMembership: (teamId: string, membershipId: string) => {
            teamMembership: import("../sdk-console").Models.Membership;
            isLoading: boolean;
        };
        useGetTeamPrefs: (teamId: string) => {
            prefs: import("../sdk-console").Models.Preferences;
            isLoading: boolean;
        };
        useListTeamLogs: (teamId: string, queries?: string[]) => {
            logs: import("../sdk-console").Models.LogList;
            isLoading: boolean;
        };
        useListTeamMemberships: (teamId: string, queries?: string[], search?: string) => {
            memberships: import("../sdk-console").Models.MembershipList;
            isLoading: boolean;
        };
        useListTeams: (queries?: string[], search?: string) => {
            teams: import("../sdk-console").Models.Team<import("../sdk-console").Models.Preferences>[];
            total: number;
            isLoading: boolean;
        };
        useUpdateTeamMembership: () => {
            updateTeamMembership: ({ teamId, membershipId, roles }: {
                teamId: string;
                membershipId: string;
                roles: string[];
            }, onSuccess?: (data: import("../sdk-console").Models.Membership) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateTeamMembershipStatus: () => {
            updateTeamMembershipStatus: ({ teamId, membershipId, userId, secret }: {
                teamId: string;
                membershipId: string;
                userId: string;
                secret: string;
            }, onSuccess?: (data: import("../sdk-console").Models.Membership) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateTeamName: () => {
            updateTeamName: ({ teamId, name }: {
                teamId: string;
                name: string;
            }, onSuccess?: <Preferences_1 extends import("../sdk-console").Models.Preferences>(data: import("../sdk-console").Models.Team<Preferences_1>) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
        useUpdateTeamPrefs: () => {
            updateTeamPrefs: ({ teamId, prefs }: {
                teamId: string;
                prefs: object;
            }, onSuccess?: <Preferences_2 extends import("../sdk-console").Models.Preferences>(data: Preferences_2) => void) => void;
            isLoading: boolean;
            isSuccess: boolean;
            isError: boolean;
            error: {
                message: string;
            };
        };
    };
}
