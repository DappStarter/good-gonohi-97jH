require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food ivory rescue sad artwork coral light army gasp'; 
let testAccounts = [
"0x2efc85089f0cfe0743586f604355c5e6cf8b84652472f2f5e46d261cf1c20ede",
"0xa7157cdaeeb98a6f5a52917647703fb107094a9bc5310a5fd63b88dd2e45936e",
"0x48358476cb9e1427e737027a538baa932d8a3cafcad740853f8eda0685643714",
"0xbf451c7bb34476dff2f5ddd0dfe0fb1bb7129b31ef57196a64f114b4f379bebb",
"0x41de4f32acd834ca8db555985eb8e125f9e226a9996e7c4828e666e020b1440f",
"0x981f32d7246357b345aa452fe3809a6ceaad32309afaa05e7d2e4184aa6a8b96",
"0xfd94db8234532f20c1efed9ab0385756d562c1516fa21bf2f1417bbaf26775bc",
"0x0ef393f74108304da0a80355a7d2b8d016fd26ccad2477f465ac8c8ee114436f",
"0x3d2990010770264316197000bcc2cc4ee143bef2a549e7721fc2dc2674d35431",
"0xda2d846ec38501ed6ecadb150b207278329ca8d2247a0bf24aa695a354780909"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


