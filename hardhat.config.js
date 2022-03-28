require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privatekey = fs.readFileSync(".secret").toString()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {


  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/7f663ff8da6144c99525666bf5a690ee",

      accounts: [privatekey]
    },
    //mumbai: {},

  },

  solidity: "0.8.4",
};
