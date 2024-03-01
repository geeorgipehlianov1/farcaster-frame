import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
    const { message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    
    // message?.raw.action.interactor.pfp_url // profile picture

    let chosenTrend = '';

    
    if (message?.button === 1) {
        chosenTrend = 'Kalos';
    } 

    if(message?.button === 2) {
        chosenTrend = 'Max Strus';
    }

    interface Trend {
        trend: string;
        trendHash: string;
        holders: number;
        shareSupply: number;
        rank1h: number;
        rank6h: number;
        price: string;
    }   

    // let topTrends: Trend[] = [];

    // THIS CODE WILL BE USE TO GET THE TREND RANK AND HASH (IF NEEDED)
    // await fetch('https://trends-market-paoph.ondigitalocean.app/trends?type=top30', {method: 'GET'})
    //     .then(response => response.json())
    //     .then(data => {
    //     topTrends = data.trends;
    //     })
    //     .catch(err => console.error(err));
    
    // const chosenTrendIndex = topTrends.map(trend => trend.trend).indexOf(chosenTrend);
    // const rank = chosenTrendIndex + 1;

    // THIS WILL BE USED WHEN USER HAD ALREADY BOUGHT
    // if (true) {
    // return new NextResponse(
    //   getFrameHtmlResponse({
    //       buttons: [ {
    //             label: 'You already submitted a response! Follow @trends to be the first to see future trend-offs',
    //             action: 'link',
    //             target: 'https://warpcast.com/georgi',
    //         },
    //       ],
    //       image: {
    //           src: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709108618/Screenshot_2024-02-28_at_10.23.18_nvvx10.png', // HERE WILL BE THE GRID IMAGES
    //       },
    //       postUrl: `https://0a2a-78-90-27-186.ngrok-free.app/api/${chosenTrend}&fid=${body.untrustedData.fid}`, // HERE WE SHOULD PLACE THE FRAME URL
    // }),
    //     );
    // }

    // THIS WILL BE USED WHEN THE GAME IS EXPIRED
    //  if (true) {
    // return new NextResponse(
    //   getFrameHtmlResponse({
    //       buttons: [ {
    //             label: 'This trend-off has expired! Follow @trends to be the first to see future trend-offs',
    //             action: 'link',
    //             target: 'https://warpcast.com/georgi',
    //         },
    //       ],
    //       image: {
    //           src: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709108618/Screenshot_2024-02-28_at_10.23.18_nvvx10.png', // HERE WILL BE THE GRID IMAGES
    //       },
    //       postUrl: `https://0a2a-78-90-27-186.ngrok-free.app/api/${chosenTrend}&fid=${body.untrustedData.fid}`, // HERE WE SHOULD PLACE THE FRAME URL
    // }),
    //     );
  // }
  
    return new NextResponse(
      getFrameHtmlResponse({
          buttons: [
            {
                label: `Buy ${chosenTrend} Trend`,
                action: 'post_redirect'
            },
          ],
          image: {
              src: 'https://farcaster-frame-seven.vercel.app/api/dynamic-image?username=kraikov', // HERE WILL BE THE GRID IMAGES
          },
          postUrl: `https://farcaster-frame-seven.vercel.app/api/${chosenTrend}&fid=${body.untrustedData.fid}`, // HERE WE SHOULD PLACE THE FRAME URL
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
