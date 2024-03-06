import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {    
   return new NextResponse(
      getFrameHtmlResponse({
        buttons: [{
          label: `Follow @trends`,
          action: 'link',
          target: 'https://warpcast.com/~/channel/perl'
        },
        ],
        image: {
          src: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709727092/game-launcher/already-submited_c4r6po.svg`,
          aspectRatio: '1:1'
        },
      }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
