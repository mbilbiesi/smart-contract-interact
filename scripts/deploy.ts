import { ethers } from "hardhat";
import {JsonHelper} from "../utils/JsonHelper";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer address:", deployer.address);

  const GetterSetterContract = await ethers.getContractFactory("GetterSetter");
  const getterSetterContract = await GetterSetterContract.deploy();
  await getterSetterContract.waitForDeployment();
  const getterSetterDeployedAddress = await getterSetterContract.getAddress();

  console.log("contract address:", getterSetterDeployedAddress);

  const jsonHelper = new JsonHelper('output.json');
  jsonHelper.writeOrUpdateJson({
    deployer_address: deployer.address,
    contract_address: getterSetterDeployedAddress,
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
