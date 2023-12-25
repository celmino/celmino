import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Project extends Service {
    constructor(client: Client);
    /**
     * Get usage stats for a project
     *
     *
     * @param {string} range
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getUsage(range?: string): Promise<Models.UsageProject>;
    /**
     * List Variables
     *
     * Get a list of all project variables. These variables will be accessible in
     * all Appwrite Functions at runtime.
     *
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listVariables(): Promise<Models.VariableList>;
    /**
     * Create Variable
     *
     * Create a new project variable. This variable will be accessible in all
     * Appwrite Functions at runtime.
     *
     * @param {string} key
     * @param {string} value
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createVariable(key: string, value: string): Promise<Models.Variable>;
    /**
     * Get Variable
     *
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getVariable(variableId: string): Promise<Models.Variable>;
    /**
     * Update Variable
     *
     * Update project variable by its unique ID. This variable will be accessible
     * in all Appwrite Functions at runtime.
     *
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateVariable(variableId: string, key: string, value?: string): Promise<Models.Variable>;
    /**
     * Delete Variable
     *
     * Delete a project variable by its unique ID.
     *
     * @param {string} variableId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteVariable(variableId: string): Promise<{}>;
}
