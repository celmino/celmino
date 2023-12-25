import { IdentityProtocol } from "../protocols/IdentityProtocol";
import { Models } from "../sdk-console";
export declare class IdentityBroker implements IdentityProtocol {
    private account;
    private teams;
    private users;
    constructor();
    setOrganization(organizationId: string): void;
    getVersion(): string;
    /**
    * Create Account
    *
    * Use this endpoint to allow a new user to register a new account in your
    * project. After the user registration completes successfully, you can use
    * the [/account/verfication](/docs/client/account#accountCreateVerification)
    * route to start verifying the user email address. To allow the new user to
    * login to their new account, you need to create a new [account
    * session](/docs/client/account#accountCreateSession).
    *
    * @param {string} userId
    * @param {string} email
    * @param {string} password
    * @param {string} name
    * @throws {Exception}
    * @returns {Promise}
   */
    createAccount<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name: string): Promise<Models.User<Preferences>>;
    me(): Promise<Models.User<Models.Preferences>>;
    createOrganization<Preferences extends Models.Preferences>(name: string): Promise<Models.Team<Preferences>>;
    updateEmail<Preferences extends Models.Preferences>(email: string, password: string): Promise<Models.User<Preferences>>;
    listIdentities<Preferences extends Models.Preferences>(): Promise<Models.IdentityList>;
    deleteIdentity<Preferences extends Models.Preferences>(identityId: string): Promise<{}>;
    createJWT(): Promise<Models.Jwt>;
    listLogs(): Promise<Models.LogList>;
    updateName<Preferences extends Models.Preferences>(name: string): Promise<Models.User<Preferences>>;
    updatePassword<Preferences extends Models.Preferences>(password: string, oldPassword: string): Promise<Models.User<Preferences>>;
    updatePhone<Preferences extends Models.Preferences>(phone: string, password: string): Promise<Models.User<Preferences>>;
    getPrefs<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    updatePrefs<Preferences extends Models.Preferences>(prefs: Partial<Preferences>): Promise<Models.User<Preferences>>;
    createRecovery(email: string, url: string): Promise<Models.Token>;
    updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<Models.Token>;
    listSessions(): Promise<Models.SessionList>;
    deleteSessions(): Promise<{}>;
    createAnonymousSession(): Promise<Models.Session>;
    createEmailSession(email: string, password: string): Promise<Models.Session>;
    createMagicURLSession(userId: string, email: string, url?: string): Promise<Models.Token>;
    updateMagicURLSession(userId: string, secret: string): Promise<Models.Session>;
    createOAuth2Session(provider: string, success?: string, failure?: string, scopes?: string[]): void | URL;
    createPhoneSession(userId: string, phone: string): Promise<Models.Token>;
    updatePhoneSession(userId: string, secret: string): Promise<Models.Session>;
    getSession(sessionId?: string): Promise<Models.Session>;
    updateSession(sessionId: string): Promise<Models.Session>;
    updateStatus<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    createVerification(url: string): Promise<Models.Token>;
    updateVerification(userId: string, secret: string): Promise<Models.Token>;
    createPhoneVerification(): Promise<Models.Token>;
    updatePhoneVerification(userId: string, secret: string): Promise<Models.Token>;
    createUser<Preferences extends Models.Preferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createArgon2User<Preferences extends Models.Preferences>(userId: string, email?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createBcryptUser<Preferences extends Models.Preferences>(userId: string, email?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createMD5User<Preferences extends Models.Preferences>(userId: string, email?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createPHPassUser<Preferences extends Models.Preferences>(userId: string, email?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createSHAUser<Preferences extends Models.Preferences>(userId: string, email?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    createScryptModifiedUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
    createScryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
    deleteUser(userId: string): Promise<{}>;
    deleteUserIdentity(userId: string): Promise<{}>;
    deleteUserSession(userId: string, sessionId: string): Promise<{}>;
    deleteUserSessions(userId: string): Promise<{}>;
    getUser<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>>;
    getUserPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences>;
    getUserUsage(range?: string, provider?: string): Promise<Models.UsageUsers>;
    listUsers<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>>;
    listUserIdentities(queries?: string, search?: string): Promise<Models.IdentityList>;
    listUserLogs(userId: string, queries?: string[]): Promise<Models.LogList>;
    listUserMemberships(userId: string): Promise<Models.MembershipList>;
    listUserSessions(userId: string): Promise<Models.SessionList>;
    updateUserEmail<Preferences extends Models.Preferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
    updateUserEmailVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
    updateUserLabels<Preferences extends Models.Preferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
    updateUserName<Preferences extends Models.Preferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
    updateUserPassword<Preferences extends Models.Preferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
    updateUserPhone<Preferences extends Models.Preferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
    updateUserPhoneVerification<Preferences extends Models.Preferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
    updateUserPrefs<Preferences extends Models.Preferences>(userId: string, prefs: object): Promise<Preferences>;
    updateUserStatus<Preferences extends Models.Preferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
    createTeam<Preferences extends Models.Preferences>(teamId: string, name: string, roles?: string[]): Promise<Models.Team<Preferences>>;
    createTeamMembership(teamId: string, roles: string[], url: string, email?: string, userId?: string, phone?: string, name?: string): Promise<Models.Membership>;
    deleteTeam(teamId: string): Promise<{}>;
    deleteTeamMembership(teamId: string, membershipId: string): Promise<{}>;
    getTeam<Preferences extends Models.Preferences>(teamId: string): Promise<Models.Team<Preferences>>;
    getTeamMembership(teamId: string, membershipId: string): Promise<Models.Membership>;
    getTeamPrefs<Preferences extends Models.Preferences>(teamId: string): Promise<Preferences>;
    /**
     * List Teams
     *
     * Get a list of all the teams in which the current user is a member. You can
     * use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listTeams<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.TeamList<Preferences>>;
    /**
     * List Team Logs
     *
     * Get the team activity logs list by its unique ID.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listTeamLogs(teamId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List Team Memberships
     *
     * Use this endpoint to list a team's members using the team's ID. All team
     * members have read access to this endpoint.
     *
     * @param {string} teamId
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listTeamMemberships(teamId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
    /**
     * Update Membership
     *
     * Modify the roles of a team member. Only team members with the owner role
     * have access to this endpoint. Learn more about [roles and
     * permissions](/docs/permissions).
     *
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateTeamMembership(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * Update Team Membership Status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team
     * after being redirected back to your app from the invitation email received
     * by the user.
     *
     * If the request is successful, a session for the user is automatically
     * created.
     *
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateTeamMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
    /**
     * Update Name
     *
     * Update the team's name by its unique ID.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateTeamName<Preferences extends Models.Preferences>(teamId: string, name: string): Promise<Models.Team<Preferences>>;
    /**
     * Update Preferences
     *
     * Update the team's preferences by its unique ID. The object you pass is
     * stored as is and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws an error if exceeded.
     *
     * @param {string} teamId
     * @param {object} prefs
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateTeamPrefs<Preferences extends Models.Preferences>(teamId: string, prefs: object): Promise<Preferences>;
}
