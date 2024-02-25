import { ethers } from "hardhat";
import { BaseScript } from "./BaseScript"; // Adjust the import path as necessary

class Deploy extends BaseScript {
  async main() {
    const [deployer] = await ethers.getSigners();
    const GetterSetterContract = await ethers.getContractFactory("GetterSetter");
    const getterSetterContract = await GetterSetterContract.deploy();
    await getterSetterContract.waitForDeployment();
    const getterSetterDeployedAddress = await getterSetterContract.getAddress();

    console.info("Contract address is created");

    this.jsonHelper.writeOrUpdateJson({
      deployer_address: deployer.address,
      contract_address: getterSetterDeployedAddress,
    });
  }
}

new Deploy().main().catch((error) => {
  console.error(error);
  process.exit(1);
});
