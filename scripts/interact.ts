import { ethers } from "hardhat";
import {JsonHelper} from "../utils/JsonHelper";

async function main() {
    const contractAddress = "0x70C616385CA5119CD82dCC662feE630381cc211d"; // Replace with actual deployed contract address
    const Contract = await ethers.getContractFactory("GetterSetter");
    const contract = Contract.attach(contractAddress);

    const setValueTx = await contract.setValue(155);
    await setValueTx.wait();

    const value = await contract.getValue();
    console.info(`contact value: ${value}`);

    const jsonHelper = new JsonHelper('output.json');
    jsonHelper.writeOrUpdateJson({
        value: value.toString(),
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
