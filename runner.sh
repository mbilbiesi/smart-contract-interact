#!/bin/bash

# Deploy the contract and capture the contract address
npx hardhat run scripts/deploy.ts --network sepolia

deployerAddress=$(jq -r '.deployer_address' output.json)
echo "Deployer Address: $deployerAddress"

export CONTRACT_ADDRESSS=$(jq -r '.contract_address' output.json)
echo "Contract Address: $CONTRACT_ADDRESS"

# Interact with the contract and capture the output
npx hardhat run scripts/interact.ts --network sepolia

value=$(jq -r '.value' output.json)
echo "Value: $value"

