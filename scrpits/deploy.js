const { ethers } = require("hardhat");

async function main() {
  const MyERC721 = await ethers.getContractFactory("MyERC721");
  const myERC721 = await MyERC721.deploy("My NFT Collection", "MYNFT", "https://ipfs.io/ipfs/");
  await myERC721.deployed();

  console.log("MyERC721 deployed to:", myERC721.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
