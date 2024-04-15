# Smart Contract - Interaction


This project guide details the steps required to deploy and interact with a smart contract using Hardhat, an Ethereum development environment. It covers setting up the environment, deploying the contract, and interacting with it both locally and using Docker.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js v20.11.1 installed (if you plan to run locally).
- Docker and Docker-compose installed (if you plan to run using Docker).

### Configuration

1. **Environment Variables**: Create a `.env` file in the root directory of your project and populate it with your private key, Infura project ID, and a value for the contract:

    ```dotenv
    PRIVATE_KEY={replace_with_your_private_key}
    INFURA_PROJECT_ID={replace_with_infura_project}
    VALUE={replace_with_contract_value_to_set_get}
    ```

2. **Set Up Infura Network**: Create a new project on [Infura](https://app.infura.io/) with a SEPOLIA endpoint and obtain the API key.

3. **Wallet Creation**: Use the Wallet class in the `utils` directory to generate a wallet:

    ```shell
    npx tsc
    node dist/utils/Wallet.js
    ```

   Note: Your Wallet Address & Private Key will be displayed in the console.

4. **Wallet Funding**: Fund your wallet using the [SEPOLIA FAUCET](https://www.alchemy.com/faucets/ethereum-sepolia).

## Running the Project Locally

Ensure you have the prerequisites installed:

- Install `jq`:

    ```shell
    npm install -g jq
    ```

- Install project dependencies:

    ```shell
    npm install
    ```

- Compile the project:

    ```shell
    npx hardhat compile
    ```

- Deploy and interact with the contract using `runner.sh`:

    ```shell
    chmod +x runner.sh
    ./runner.sh
    ```


## Running with Docker

To use Docker for deployment and interaction, run:

```shell
docker-compose up
docker-compose run qa-assessment ./runner.sh
```

### Results

1. Console output (Example)

```
Deployer Address: 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Contract Address: 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Value: XXXXXXXXXXXX
```
2. `output.json` file which can be found under output directory.


## Running tests

Execute the following command to run tests:

```shell
npx hardhat test
```

## Thanks :blue_heart:

Thank you for this opportunity to explore new technologies and libraries. This experience has been both exciting and educational.

For any questions or further information, please contact me at [bilbiesim@gmail.com](mailto:bilbiesim@gmail.com).
