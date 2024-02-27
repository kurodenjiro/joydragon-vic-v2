/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
      CHAIN_ID: 89,
      CHAIN_NAME: "Vic",
      CHAIN_NETWORK: "viction",
      TOKEN: "Vic",
      SYMBOL: "VIC",
      RPC: "https://rpc-testnet.viction.xyz",
      URL_FAUCET: "https://faucet-testnet.viction.xyz/",
      NFT_ADDRESS:'0x63a21cb4c9d10c06247Ae4BCc624e3464c6F5BB6',
      TOKEN_ADDRESS:'0x0994c0e04E5fB8D1271106F4E7957274Bf41Ec75',
      FAUCET_ADDRESS:'0x87a741aC23274EAde3D4497B1f02779173f0AE7F',
      DAO_ADDRESS:'0x5228bc93F33A1026999FE181F786F72804da8f64',
      EXPLORER_URL:'https://scan-api-testnet.viction.xyz',
      HOST:'https://joydragon-vic-v2.vercel.app'
    },
}
module.exports = nextConfig
