import { JsonHelper } from "../utils/JsonHelper";

export abstract class BaseScript {
    protected jsonHelper: JsonHelper;

    constructor() {
        this.jsonHelper = new JsonHelper('output.json');
    }

    protected getEnvVariable(name: string): string {
        const value = process.env[name];
        if (!value) {
            throw new Error(`Error: ${name} environment variable not set.`);
        }
        return value;
    }
}
