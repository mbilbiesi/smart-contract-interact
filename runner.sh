#!/bin/bash

# Deploy the contract and capture the contract address
#npx hardhat run scripts/deploy.ts --network sepolia
#CONTRACT_ADDRESS=$(echo "GetterSetterContract deployed address: 0x5Fa187945956071490308a3559688a507B8fA8F0" | sed 's/^.*GetterSetterContract deployed address: \([^\ ]*\).*$/\1/')

#contractAddress=$(jq -r '.contractAddress' output.json)
#echo "Contract Address: $contractAddress"

#echo "$CONTRACT_ADDRESS"

## Interact with the contract and capture the output
npx hardhat run scripts/interact.ts --network sepolia
#DEPLOYER_ADDRESS=$(echo $INTERACT_OUTPUT | grep -oP 'Deployer Address: \K\w+')
#SET_VALUE=$(echo $INTERACT_OUTPUT | grep -oP 'Value Set: \K\w+')
#
## Create JSON output
#OUTPUT_JSON=$(cat <<EOF
#{
#  "contractAddress": "$CONTRACT_ADDRESS",
#  "deployerAddress": "$DEPLOYER_ADDRESS",
#  "valueSet": $SET_VALUE
#}
#EOF
#)
#
## Write JSON to a file
#echo "$OUTPUT_JSON" > output.json
#
## Optionally, print the JSON content to the console
#cat output.json
