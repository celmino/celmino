import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Users extends Service {
    constructor(client: Client);
    /**
     * List Users
     *
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>>;
    /**
     * Create User
     *
     * Create a new user.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} phone
     * @param {string} password
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    create<Preferences extends Models.Preferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with Argon2 Password
     *
     * Create a new user. Password provided must be hashed with the
     * [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST
     * /users](/docs/server/users#usersCreate) endpoint to create users with a
     * plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createArgon2User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with Bcrypt Password
     *
     * Create a new user. Password provided must be hashed with the
     * [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST
     * /users](/docs/server/users#usersCreate) endpoint to create users with a
     * plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createBcryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * List Identities
     *
     * Get identities for all users.
     *
     * @param {string} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listIdentities(queries?: string, search?: string): Promise<Models.IdentityList>;
    /**
     * Delete Identity
     *
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteIdentity(identityId: string): Promise<{}>;
    /**
     * Create User with MD5 Password
     *
     * Create a new user. Password provided must be hashed with the
     * [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST
     * /users](/docs/server/users#usersCreate) endpoint to create users with a
     * plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createMD5User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with PHPass Password
     *
     * Create a new user. Password provided must be hashed with the
     * [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST
     * /users](/docs/server/users#usersCreate) endpoint to create users with a
     * plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createPHPassUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with Scrypt Password
     *
     * Create a new user. Password provided must be hashed with the
     * [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST
     * /users](/docs/server/users#usersCreate) endpoint to create users with a
     * plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {number} passwordCpu
     * @param {number} passwordMemory
     * @param {number} passwordParallel
     * @param {number} passwordLength
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createScryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with Scrypt Modified Password
     *
     * Create a new user. Password provided must be hashed with the [Scrypt
     * Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc)
     * algorithm. Use the [POST /users](/docs/server/users#usersCreate) endpoint
     * to create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {string} passwordSaltSeparator
     * @param {string} passwordSignerKey
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createScryptModifiedUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Create User with SHA Password
     *
     * Create a new user. Password provided must be hashed with the
     * [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use
     * the [POST /users](/docs/server/users#usersCreate) endpoint to create users
     * with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordVersion
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createSHAUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordVersion?: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Get usage stats for the users API
     *
     *
     * @param {string} range
     * @param {string} provider
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getUsage(range?: string, provider?: string): Promise<Models.UsageUsers>;
    /**
     * Get User
     *
     * Get a user by its unique ID.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    get<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>>;
    /**
     * Delete User
     *
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is
     * released and can be reused, all user-related resources like documents or
     * storage files should be deleted before user deletion. If you want to keep
     * ID reserved, use the [updateStatus](/docs/server/users#usersUpdateStatus)
     * endpoint instead.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    delete(userId: string): Promise<{}>;
    /**
     * Update Email
     *
     * Update the user email by its unique ID.
     *
     * @param {string} userId
     * @param {string} email
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateEmail<Preferences extends Models.Preferences>(userId: string, email: string): Promise<Models.User<Preferences>>;
    /**
     * Update User Labels
     *
     * Update the user labels by its unique ID.
     *
     * Labels can be used to grant access to resources. While teams are a way for
     * user's to share access to a resource, labels can be defined by the
     * developer to grant access without an invitation. See the [Permissions
     * docs](/docs/permissions) for more info.
     *
     * @param {string} userId
     * @param {string[]} labels
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateLabels<Preferences extends Models.Preferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>>;
    /**
     * List User Logs
     *
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listLogs(userId: string, queries?: string[]): Promise<Models.LogList>;
    /**
     * List User Memberships
     *
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listMemberships(userId: string): Promise<Models.MembershipList>;
    /**
     * Update Name
     *
     * Update the user name by its unique ID.
     *
     * @param {string} userId
     * @param {string} name
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateName<Preferences extends Models.Preferences>(userId: string, name: string): Promise<Models.User<Preferences>>;
    /**
     * Update Password
     *
     * Update the user password by its unique ID.
     *
     * @param {string} userId
     * @param {string} password
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updatePassword<Preferences extends Models.Preferences>(userId: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Update Phone
     *
     * Update the user phone by its unique ID.
     *
     * @param {string} userId
     * @param {string} number
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updatePhone<Preferences extends Models.Preferences>(userId: string, number: string): Promise<Models.User<Preferences>>;
    /**
     * Get User Preferences
     *
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences>;
    /**
     * Update User Preferences
     *
     * Update the user preferences by its unique ID. The object you pass is stored
     * as is, and replaces any previous value. The maximum allowed prefs size is
     * 64kB and throws error if exceeded.
     *
     * @param {string} userId
     * @param {object} prefs
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updatePrefs<Preferences extends Models.Preferences>(userId: string, prefs: object): Promise<Preferences>;
    /**
     * List User Sessions
     *
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listSessions(userId: string): Promise<Models.SessionList>;
    /**
     * Delete User Sessions
     *
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteSessions(userId: string): Promise<{}>;
    /**
     * Delete User Session
     *
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteSession(userId: string, sessionId: string): Promise<{}>;
    /**
     * Update User Status
     *
     * Update the user status by its unique ID. Use this endpoint as an
     * alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId
     * @param {boolean} status
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateStatus<Preferences extends Models.Preferences>(userId: string, status: boolean): Promise<Models.User<Preferences>>;
    /**
     * Update Email Verification
     *
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} emailVerification
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateEmailVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>>;
    /**
     * Update Phone Verification
     *
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} phoneVerification
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updatePhoneVerification<Preferences extends Models.Preferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>>;
}
