#!/bin/bash

json_filename=output.json

# Deploy the contract and capture the contract address
npx hardhat run scripts/deploy.ts --network sepolia

deployerAddress=$(jq -r '.deployer_address' $json_filename)
echo "Deployer Address: $deployerAddress"

CONTRACT_ADDRESS=$(jq -r '.contract_address' $json_filename)
export CONTRACT_ADDRESS
echo "Contract Address: $CONTRACT_ADDRESS"

# Interact with the contract and capture the output
npx hardhat run scripts/interact.ts --network sepolia

value=$(jq -r '.value' $json_filename)
echo "Value: $value"

