import { expect } from "chai";
import { ethers } from "hardhat";

let MyContract;
let myContract : any;

describe("Getter & Setter Contract Tests", function () {

    before(async () => {
        // Given
        MyContract = await ethers.getContractFactory("GetterSetter");
        myContract = await MyContract.deploy();
        await myContract.waitForDeployment();
    })

    it("Should correctly handle boundary values", async function () {
        //When
        const minBoundary = 0;
        await myContract.setValue(minBoundary);

        // Then
        expect(await myContract.getValue(), `failed to set minimum boundary ${minBoundary}`).to.equal(minBoundary);

        // When
        const maxBoundary = ethers.MaxUint256;
        await myContract.setValue(maxBoundary);

        // Then
        expect(await myContract.getValue(), `failed to set maximum boundary ${maxBoundary}`).to.equal(maxBoundary);
    });

    it("Should throw an error when sending text instead of a uint", async function () {
        try {
            // When
            await myContract.setValue("textValue");
            expect.fail("Expected error when sending text to setValue");
        } catch (error) {
            // Then
            expect(error, '').to.be.an('error');
        }
    });
});
