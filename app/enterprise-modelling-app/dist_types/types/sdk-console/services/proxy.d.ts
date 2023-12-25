import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Proxy extends Service {
    constructor(client: Client);
    /**
     * List Rules
     *
     * Get a list of all the proxy rules. You can use the query params to filter
     * your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {CelminoException}
     * @returns {Promise}
    */
    listRules(queries?: string[], search?: string): Promise<Models.ProxyRuleList>;
    /**
     * Create Rule
     *
     * Create a new proxy rule.
     *
     * @param {string} domain
     * @param {string} resourceType
     * @param {string} resourceId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    createRule(domain: string, resourceType: string, resourceId?: string): Promise<Models.ProxyRule>;
    /**
     * Get Rule
     *
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    getRule(ruleId: string): Promise<Models.ProxyRule>;
    /**
     * Delete Rule
     *
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    deleteRule(ruleId: string): Promise<{}>;
    /**
     * Update Rule Verification Status
     *
     *
     * @param {string} ruleId
     * @throws {CelminoException}
     * @returns {Promise}
    */
    updateRuleVerification(ruleId: string): Promise<Models.ProxyRule>;
}
