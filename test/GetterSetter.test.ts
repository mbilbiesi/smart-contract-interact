import { expect } from "chai";
import { ethers } from "hardhat";


describe("Getter & Setter Contract", function () {

    it("Should return the new value once it's changed", async function () {
        const [owner] = await ethers.getSigners();
        const MyContract = await ethers.getContractFactory("GetterSetter");
        const myContract = await MyContract.deploy();
        await myContract.waitForDeployment();

        const setValueTx = await myContract.setValue(123);

        await setValueTx.wait();

        expect(await myContract.getValue()).to.equal(123);
    });
});
