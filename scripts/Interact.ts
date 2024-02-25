import { ethers } from "hardhat";
import { BaseScript } from "./BaseScript"; // Adjust the import path as necessary

class Interact extends BaseScript {

    async main() {
        const contractAddress = process.env.CONTRACT_ADDRESS;

        if (!contractAddress) {
            console.error("Error: CONTRACT_ADDRESS environment variable not set.");
            process.exit(1);
        }

        const Contract = await ethers.getContractFactory("GetterSetter");
        const contract = Contract.attach(contractAddress);

        const setValueTx = await contract.setValue(process.env.VALUE || "0");
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
