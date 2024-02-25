import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();


// console.log(`Private Key Length: ${process.env.PRIVATE_KEY}`);
// console.log(` infura: ${process.env.INFURA_PROJECT_ID}`);

const config: HardhatUserConfig = {
  solidity: "0.8.6",
  networks: {
    sepolia: {
      // url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Use your Infura project ID
      url: `https://eth-sepolia.g.alchemy.com/v2/ZrTW9GH8WFKORKntnIjUWoUgsmZFKMsr`,
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Set your private key in environment variables
    },
  },
};

export default config;
