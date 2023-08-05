const { ethers } = require("hardhat");

async function testBalanceOf() {
  // Replace with your ERC721 contract address on the Polygon Mumbai network
  const contractAddress = "YOUR_MUMBAI_ERC721_CONTRACT_ADDRESS";
  // Replace with the address of the designated wallet
  const walletAddress = "DESIGNATED_WALLET_ADDRESS";

  // Get the deployed ERC721 contract instance
  const ERC721 = await ethers.getContractFactory("MyERC721");
  const contract = await ERC721.attach(contractAddress);

  // Call the balanceOf function to get the number of NFTs in the wallet
  const balance = await contract.balanceOf(walletAddress);

  console.log(`Number of NFTs in the designated wallet: ${balance.toString()}`);
}

testBalanceOf()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
