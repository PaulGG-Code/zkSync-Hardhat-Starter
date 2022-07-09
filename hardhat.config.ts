
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

// Requirements for Zksync
require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");


require("dotenv").config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */



module.exports = {
  zksolc: {
    version: "0.1.0",
    compilerSource: "docker",
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: "matterlabs/zksolc",
      },
    },
  },
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    // ethNetwork: "goerli", // can also be the RPC URL of the network  (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
 },
  networks: {
    hardhat: {
      zksync: true,
    },
  },

  etherscan: {
   apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.10",
  },
};
