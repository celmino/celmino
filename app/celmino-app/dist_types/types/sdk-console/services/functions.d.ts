import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress } from '../client';
export declare class Functions extends Service {
    constructor(client: Client);
    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    list(queries?: string[], search?: string): Promise<Models.FunctionList>;
    /**
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateBranch
     * @throws {CelminoException}
     * @returns {Promise}
    */
    create(functionId: string, name: string, runtime: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateBranch?: string): Promise<Models.Function>;
    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listRuntimes(): Promise<Models.RuntimeList>;
    /**
     * Get Functions Usage
     *
     *
     * @param {string} range
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getUsage(range?: string): Promise<Models.UsageFunctions>;
    /**
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    get(functionId: string): Promise<Models.Function>;
    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @throws {CelminoException}
     * @returns {Promise}
    */
    update(functionId: string, name: string, runtime: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string): Promise<Models.Function>;
    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    delete(functionId: string): Promise<{}>;
    /**
     * List Deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList>;
    /**
     * Create Deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     *
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     *
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {File} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    /**
     * Get Deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Update Function Deployment
     *
     * Update the function code deployment ID using the unique function ID. Use
     * this endpoint to switch the code deployment that should be executed by the
     * execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateDeployment(functionId: string, deploymentId: string): Promise<Models.Function>;
    /**
     * Delete Deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteDeployment(functionId: string, deploymentId: string): Promise<{}>;
    /**
     * Create Build
     *
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createBuild(functionId: string, deploymentId: string, buildId: string): Promise<{}>;
    /**
     * Download Deployment
     *
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {CelminoException}
     * @returns {URL}
    */
    downloadDeployment(functionId: string, deploymentId: string): URL;
    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listExecutions(functionId: string, queries?: string[], search?: string): Promise<Models.ExecutionList>;
    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} path
     * @param {string} method
     * @param {object} headers
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createExecution(functionId: string, body?: string, async?: boolean, path?: string, method?: string, headers?: object): Promise<Models.Execution>;
    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution>;
    /**
     * Get Function Usage
     *
     *
     * @param {string} functionId
     * @param {string} range
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getFunctionUsage(functionId: string, range?: string): Promise<Models.UsageFunctions>;
    /**
     * List Variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listVariables(functionId: string): Promise<Models.VariableList>;
    /**
     * Create Variable
     *
     * Create a new function environment variable. These variables can be accessed
     * in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createVariable(functionId: string, key: string, value: string): Promise<Models.Variable>;
    /**
     * Get Variable
     *
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getVariable(functionId: string, variableId: string): Promise<Models.Variable>;
    /**
     * Update Variable
     *
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateVariable(functionId: string, variableId: string, key: string, value?: string): Promise<Models.Variable>;
    /**
     * Delete Variable
     *
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteVariable(functionId: string, variableId: string): Promise<{}>;
}
