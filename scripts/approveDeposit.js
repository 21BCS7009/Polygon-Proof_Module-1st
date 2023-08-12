// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/Project.json");

const tokenAddress = "0x5c922b1C12330B2BCc4f5608A0348613EbeAC23d";
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x0e93A15b8e41D004EF3941C1E1ACDa024B68638C"; 
async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    for(let i=0;i<5;i++)
     {const approveTx = await tokenContract.approve(fxERC721RootAddress, i);
    await approveTx.wait();
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();

    console.log('Approval confirmed');
    console.log("Tokens deposited");
     }


  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });