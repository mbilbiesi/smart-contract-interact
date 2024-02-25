import { ethers } from "hardhat";
import { BaseScript } from "./BaseScript";

class Interact extends BaseScript {

    async main() {
        const contractAddress = this.getEnvVariable(`CONTRACT_ADDRESS`);
        const valueToSet = this.getEnvVariable(`VALUE`);

        const Contract = await ethers.getContractFactory("GetterSetter");
        const contract = Contract.attach(contractAddress);

        const setValueTx = await contract.setValue(valueToSet);
        await setValueTx.wait();

        const value = await contract.getValue();

        this.jsonHelper.writeOrUpdateJson({
            value: value.toString(),
        });
    }
}

new Interact().main().catch((error) => {
    console.error(error);
    process.exit(1);
});
