import { JsonHelper } from "../utils/JsonHelper";

export abstract class BaseScript {
    protected jsonHelper: JsonHelper;

    constructor() {
        this.jsonHelper = new JsonHelper('output.json');
    }


}
