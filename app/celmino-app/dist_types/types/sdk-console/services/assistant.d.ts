import { Service } from '../service';
import { Client } from '../client';
export declare class Assistant extends Service {
    constructor(client: Client);
    /**
     * Ask Query
     *
     *
     * @param {string} prompt
     * @throws {CelminoException}
     * @returns {Promise}
    */
    chat(prompt: string): Promise<{}>;
}
