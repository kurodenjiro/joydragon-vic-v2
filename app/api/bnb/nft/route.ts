
import {
  NextResponse
} from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page");
    const address = searchParams.get("address");
    if (address) {
      let response: any = await fetch(`${process.env.EXPLORER_URL}/api/tokentx/nft/list?tokenAddress=${address}&offset=${page}&limit=20`)
      response = await response.json()
      let nftsList: any = response?.data;
      let nftRes = [];
      for (const nft of nftsList) {
        nftRes.push({
          id: nft.tokenId,
          address: nft.to
        })
      }

      return NextResponse.json({ data: nftRes, total: nftRes.length }, {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },);

    } else {
      let response: any = await fetch(`${process.env.EXPLORER_URL}/api/nft/inventory?tokenAddress=${process.env.NFT_ADDRESS}&limit=20&offset=0`)
      response = await response.json()
      let nftsList: any = response?.data?.filter((item: any) => item.address !== '0x0000000000000000000000000000000000000000');
      let nftRes = [];
      for (const nft of nftsList) {
        nftRes.push({
          id: nft.tokenId,
          address: nft.to
        })
      }

      return NextResponse.json({ data: nftRes, total: nftRes.length }, {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },);
    }


  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  }

}