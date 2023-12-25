import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Vcs extends Service {
    constructor(client: Client);
    /**
     * List Repositories
     *
     *
     * @param {string} installationId
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listRepositories(installationId: string, search?: string): Promise<Models.ProviderRepositoryList>;
    /**
     * Create repository
     *
     *
     * @param {string} installationId
     * @param {string} name
     * @param {boolean} xprivate
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createRepository(installationId: string, name: string, xprivate: boolean): Promise<Models.ProviderRepository>;
    /**
     * Get repository
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getRepository(installationId: string, providerRepositoryId: string): Promise<Models.ProviderRepository>;
    /**
     * List Repository Branches
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listRepositoryBranches(installationId: string, providerRepositoryId: string): Promise<Models.BranchList>;
    /**
     * Detect runtime settings from source code
     *
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerRootDirectory
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createRepositoryDetection(installationId: string, providerRepositoryId: string, providerRootDirectory?: string): Promise<Models.Detection>;
    /**
     * Authorize external deployment
     *
     *
     * @param {string} installationId
     * @param {string} repositoryId
     * @param {string} providerPullRequestId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateExternalDeployments(installationId: string, repositoryId: string, providerPullRequestId: string): Promise<{}>;
    /**
     * List installations
     *
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listInstallations(queries?: string[], search?: string): Promise<Models.InstallationList>;
    /**
     * Get installation
     *
     *
     * @param {string} installationId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getInstallation(installationId: string): Promise<Models.Installation>;
    /**
     * Delete Installation
     *
     *
     * @param {string} installationId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteInstallation(installationId: string): Promise<{}>;
}
