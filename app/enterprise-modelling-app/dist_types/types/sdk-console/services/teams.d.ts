import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Teams extends Service {
    constructor(client: Client);
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
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.TeamList<Preferences>>;
    /**
     * Create Team
     *
     * Create a new team. The user who creates the team will automatically be
     * assigned as the owner of the team. Only the users with the owner role can
     * invite new members, add new owners and delete or update the team.
     *
     * @param {string} teamId
     * @param {string} name
     * @param {string[]} roles
     * @throws {CelminoException}
     * @returns {Promise}
    */
    create<Preferences extends Models.Preferences>(teamId: string, name: string, roles?: string[]): Promise<Models.Team<Preferences>>;
    /**
     * Get Team
     *
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    get<Preferences extends Models.Preferences>(teamId: string): Promise<Models.Team<Preferences>>;
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
    updateName<Preferences extends Models.Preferences>(teamId: string, name: string): Promise<Models.Team<Preferences>>;
    /**
     * Delete Team
     *
     * Delete a team using its ID. Only team members with the owner role can
     * delete the team.
     *
     * @param {string} teamId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    delete(teamId: string): Promise<{}>;
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
    listLogs(teamId: string, queries?: string[]): Promise<Models.LogList>;
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
    listMemberships(teamId: string, queries?: string[], search?: string): Promise<Models.MembershipList>;
    /**
     * Create Team Membership
     *
     * Invite a new member to join your team. Provide an ID for existing users, or
     * invite unregistered users using an email or phone number. If initiated from
     * a Client SDK, Appwrite will send an email or sms with a link to join the
     * team to the invited user, and an account will be created for them if one
     * doesn't exist. If initiated from a Server SDK, the new member will be added
     * automatically to the team.
     *
     * You only need to provide one of a user ID, email, or phone number. Appwrite
     * will prioritize accepting the user ID > email > phone number if you provide
     * more than one of these parameters.
     *
     * Use the `url` parameter to redirect the user from the invitation email to
     * your app. After the user is redirected, use the [Update Team Membership
     * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
     * the user to accept the invitation to the team.
     *
     * Please note that to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * Appwrite will accept the only redirect URLs under the domains you have
     * added as a platform on the Appwrite Console.
     *
     *
     * @param {string} teamId
     * @param {string[]} roles
     * @param {string} url
     * @param {string} email
     * @param {string} userId
     * @param {string} phone
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createMembership(teamId: string, roles: string[], url: string, email?: string, userId?: string, phone?: string, name?: string): Promise<Models.Membership>;
    /**
     * Get Team Membership
     *
     * Get a team member by the membership unique id. All team members have read
     * access for this resource.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getMembership(teamId: string, membershipId: string): Promise<Models.Membership>;
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
    updateMembership(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * Delete Team Membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete
     * the membership of any other team member. You can also use this endpoint to
     * delete a user membership even if it is not accepted.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteMembership(teamId: string, membershipId: string): Promise<{}>;
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
    updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
    /**
     * Get Team Preferences
     *
     * Get the team's shared preferences by its unique ID. If a preference doesn't
     * need to be shared by all team members, prefer storing them in [user
     * preferences](/docs/client/account#accountGetPrefs).
     *
     * @param {string} teamId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getPrefs<Preferences extends Models.Preferences>(teamId: string): Promise<Preferences>;
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
    updatePrefs<Preferences extends Models.Preferences>(teamId: string, prefs: object): Promise<Preferences>;
}
