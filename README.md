# Polygon-Proof_Module-1st

## Description
Imagine that you are working on a large NFT project. Your team decided to move your project to Polygon to increase demand and save on gas. Now it's your job to make this happen!

For this project, you will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge. To put a twist on the project, use an image generation tool - like DALLE 2 or Midjourney - to the images for your NFTs.
This project demonstrates how to use the fxPortal contracts to transfer ERC20 tokens from Goerli to Mumbai.

## Project Rubric
To successfully complete the Final Challenge, your project should:

1. Generate a 5-item collection using DALLE 2 or Midjourney
2. Store items on IPFS using pinata.cloud
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
   You should have a promptDescription function on the contract that returns the prompt you used to generate the images
4. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
5. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
6. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
   Approve the NFTs to be transferred
   Deposit the NFTs to the Bridge

## hardhat.config.js 
Your config file should look like this
```
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
```

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file.
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key in which you want to mint NFTs.
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
