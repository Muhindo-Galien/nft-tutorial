// require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org", 
      accounts: [process.env.PRIVATE_KEY],
      chainId: 44787,
    },
  },
};