const { ethers } = require("hardhat");

async function batchMint() {
  // Replace the following with your ERC721 contract's deployment address on the Goerli Testnet
  const contractAddress = "YOUR_ERC721_CONTRACT_ADDRESS";
  // Replace with the address of the account that will perform the batch minting
  const accountAddress = "YOUR_ACCOUNT_ADDRESS";
  // Set the number of NFTs to mint (5 in this case)
  const numNFTsToMint = 5;

  // Get the deployed ERC721 contract instance
  const ERC721 = await ethers.getContractFactory("MyERC721");
  const contract = await ERC721.attach(contractAddress);

  // Check if the contract implements the "mint" function
  if (!contract.functions["mint"]) {
    throw new Error("The ERC721 contract does not have a 'mint' function.");
  }

  // Perform batch minting
  for (let i = 0; i < numNFTsToMint; i++) {
    // Replace the following with the metadata URI for each NFT
    const metadataURI = `https://ipfs.io/ipfs/YOUR_METADATA_URI_${i}`;
    // Replace the following with any specific prompt description for each NFT
    const prompt = `NFT ${i + 1} prompt description`;

    // Call the "mint" function to mint each NFT
    await contract.mint(accountAddress, metadataURI, prompt);
    console.log(`NFT ${i + 1} minted successfully.`);
  }
}

batchMint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
