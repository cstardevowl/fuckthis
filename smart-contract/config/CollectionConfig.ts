import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TytoGreyGenesisCollection',
  tokenName: 'Tyto Grey Genesis Collection',
  tokenSymbol: 'TytoGrey',
  hiddenMetadataUri: 'ipfs://bafybeibyejbparwyeexi3u74esniqh5c5imhvadlqfoykmkuxzd2moc7um/hm.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 25,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x52E8B88fe0b6f34612109D3D119461ED0BFd870c',
  marketplaceIdentifier: 'Tyto-Grey-Genesis-Collection',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
