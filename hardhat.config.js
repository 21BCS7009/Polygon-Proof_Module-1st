/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
      goerli: {
        url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
        accounts: ["YOUR_PRIVATE_KEY"],
      },
    },
    solidity: "0.8.0",
  };
  