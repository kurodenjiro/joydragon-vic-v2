/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
      CHAIN_ID: 89,
      CHAIN_NAME: "Vic",
      CHAIN_NETWORK: "viction",
      TOKEN: "tomo",
      SYMBOL: "TOMO",
      RPC: "https://rpc-testnet.viction.xyz",
      URL_FAUCET: "https://faucet-testnet.viction.xyz/",
      NFT_ADDRESS:'0x63a21cb4c9d10c06247Ae4BCc624e3464c6F5BB6',
      TOKEN_ADDRESS:'0x0994c0e04E5fB8D1271106F4E7957274Bf41Ec75',
      FAUCET_ADDRESS:'0x87a741aC23274EAde3D4497B1f02779173f0AE7F',
      DAO_ADDRESS:'0x5228bc93F33A1026999FE181F786F72804da8f64',
      EXPLORER_URL:'https://scan-api-testnet.viction.xyz',
      HOST:'http://localhost:3000'
    },
}
module.exports = nextConfig

// # Latest VICTest

// JoyGotchiToken: 0x0994c0e04E5fB8D1271106F4E7957274Bf41Ec75
// JoyGotchi: 0x63a21cb4c9d10c06247Ae4BCc624e3464c6F5BB6
// GameManager: 0x9aa75e76963f3cf340C955C60D9958Fc7f4b235D
// GenePool: 0x72CC1d5FD1F3626eCFF91797910E92A12732Deaa
// Faucet: 0x87a741aC23274EAde3D4497B1f02779173f0AE7F
// DAO: 0x5228bc93F33A1026999FE181F786F72804da8f64