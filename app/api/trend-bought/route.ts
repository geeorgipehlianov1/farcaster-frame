import { BASE_URL, FRAME_ID, REFERRAL_ADDRESS, TRENDS_MARKET_BE_URL, TREND_MARKET_FE_URL } from '@/app/lib/constants';
import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse>
{    
    
return new NextResponse(
      getFrameHtmlResponse({
        buttons: [{
            label: `Follow @trends`,
            action: 'link',
            target: 'https://warpcast.com/~/channel/perl'
        },
        ],
        image: {
         src: `${BASE_URL}/api/trends-ranks`
        },
      }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
