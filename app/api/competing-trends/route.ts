import { BASE_URL, FIRST_TREND, FRAME_ID, SECOND_TREND, TRENDS_MARKET_BE_URL } from '@/app/lib/constants';
import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse>
{
  const body: FrameRequest = await req.json();
  const { message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });


  let chosenTrend = '';

  if (message?.button === 1)
  {
    chosenTrend = `${FIRST_TREND}`;
  }

  if (message?.button === 2)
  {
    chosenTrend = `${SECOND_TREND}`;
  }

  let result = { voted: false }

  await fetch(`${TRENDS_MARKET_BE_URL}/frames/voted/${FRAME_ID}/${body.untrustedData.fid}`, {
    method: 'GET'
  }).then(response => response.json())
    .then(data =>
    {
      result.voted = data.voted;
    });

  if (result.voted)
  {
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [{
          label: `Buy ${chosenTrend} Trend`,
        },
        ],
        image: {
          src: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709730578/game-launcher/image_eeeblr.svg`,
          aspectRatio: '1:1'
        },
        postUrl: `${BASE_URL}/api/trend-bought`,
      }),
    );
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Buy ${chosenTrend} Trend`,
          action: 'post_redirect'
        },
      ],
      image: {
        src: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709730578/game-launcher/image_eeeblr.svg`,
        aspectRatio: '1:1'
      },
      postUrl: `${BASE_URL}/api/redirect-screen?chosenTrend=${chosenTrend}&fid=${body.untrustedData.fid}&pfp=${message?.raw.action.interactor.pfp_url}&followers=${message?.raw.action.interactor.follower_count}`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response>
{
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
