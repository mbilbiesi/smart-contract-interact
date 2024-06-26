import {ethers} from 'hardhat';
import {BaseScript} from './BaseScript';

class Deploy extends BaseScript {
  async main() {
    const [deployer] = await ethers.getSigners();
    const GetterSetterContract = await ethers.getContractFactory('GetterSetter');
    const getterSetterContract = await GetterSetterContract.deploy();
    await getterSetterContract.waitForDeployment();
    const getterSetterDeployedAddress = await getterSetterContract.getAddress();

    this.jsonHelper.writeOrUpdateJson({
      deployer_address: deployer.address,
      contract_address: getterSetterDeployedAddress,
    });
  }
}

new Deploy().main().catch(error => {
  console.error(error);
  throw new Error('Error in deploying contract');
});
