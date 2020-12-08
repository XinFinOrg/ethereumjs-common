import { chainsType } from './../types'

export const chains: chainsType = {
    names: {
        '1': 'mainnet',
        '3': 'ropsten',
        '4': 'rinkeby',
        '42': 'kovan',
        '5': 'goerli',
        '50': 'xdcmainnet',
        '51': 'apothem',
  },
  mainnet: require('./mainnet.json'),
  ropsten: require('./ropsten.json'),
  rinkeby: require('./rinkeby.json'),
  kovan: require('./kovan.json'),
  goerli: require('./goerli.json'),
  xdcmainnet: require('./xdcmainnet.json'),
  apothem: require('./apothem.json'),
};
