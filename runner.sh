#!/bin/bash

json_filename=../output/output.json

# Deploy
npx hardhat run scripts/Deploy.ts --network sepolia

deployerAddress=$(jq -r '.deployer_address' $json_filename)
echo "Deployer Address: $deployerAddress"

CONTRACT_ADDRESS=$(jq -r '.contract_address' $json_filename)
export CONTRACT_ADDRESS
echo "Contract Address: $CONTRACT_ADDRESS"

# Interact
npx hardhat run scripts/Interact.ts --network sepolia

value=$(jq -r '.value' $json_filename)
echo "Value: $value"

