const { ethers } = require("hardhat");

async function transferNFTs() {
  // Replace with your ERC721 contract address on the Goerli Testnet
  const contractAddress = "YOUR_ERC721_CONTRACT_ADDRESS";
  // Replace with the address of the account that owns the NFTs on Goerli
  const accountAddress = "YOUR_ACCOUNT_ADDRESS";
  // Replace with the address of the Polygon Mumbai FxPortal Bridge
  const bridgeAddress = "0x0000000000000000000000000000000000001010";
  // Replace with the corresponding Polygon MATIC token address on the Polygon Mumbai network
  const maticTokenAddress = "0x0000000000000000000000000000000000001010";

  // Get the deployed ERC721 contract instance
  const ERC721 = await ethers.getContractFactory("MyERC721");
  const contract = await ERC721.attach(contractAddress);

  // Check if the contract implements the "approve" function
  if (!contract.functions["approve"]) {
    throw new Error("The ERC721 contract does not have an 'approve' function.");
  }

  // Approve the FxPortal Bridge to spend all NFTs on behalf of the account
  const approvalTx = await contract.approve(bridgeAddress, ethers.constants.MaxUint256);
  await approvalTx.wait();
  console.log("Approval transaction successful.");

  // Deposit each NFT to the FxPortal Bridge
  for (let tokenId = 1; tokenId <= 5; tokenId++) {
    const depositTx = await contract.deposit(bridgeAddress, tokenId, maticTokenAddress);
    await depositTx.wait();
    console.log(`NFT ${tokenId} deposited successfully.`);
  }
}

transferNFTs()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
