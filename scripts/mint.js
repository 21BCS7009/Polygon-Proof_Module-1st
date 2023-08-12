// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Project.json");

const tokenAddress = "0x5c922b1C12330B2BCc4f5608A0348613EbeAC23d"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0e93A15b8e41D004EF3941C1E1ACDa024B68638C"; // place your public address for your wallet here

const nftjson = ["ipfs://QmeLL7NvERPJDbHq9tNZsnVSecEJsQ1sJZWekCdBAgEERh", "ipfs://QmbGMiTPQod5GJsss9YaqQ34okNNuiRbdpbxWSLQyrS7cf", "ipfs://QmVsSbUk3LXt5Wj6nY5CGMx5nJ12kzxSgV4QJUipSScRTo", "ipfs://QmdWLy1nhkYrwbPvPqx5fUhR9Ee1jgefevh3BNwnEZUHPR", "ipfs://QmWe6tnLGjgQkVnojSLapjdxMeJDn4B49R4VoTxpirMYSx"]
async function main() {

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  for (let i = 0; i < nftjson.length; i++) {
    const tx = await token.mint(walletAddress, i, nftjson[i]);
    await tx.wait();
  }


  console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
