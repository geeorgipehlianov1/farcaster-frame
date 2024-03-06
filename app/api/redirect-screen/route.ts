import { FRAME_ID, REFERRAL_ADDRESS, TRENDS_MARKET_BE_URL, TREND_MARKET_FE_URL } from '@/app/lib/constants';
import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {    
  const newUrl = new URL(req.nextUrl)

  const fid = newUrl.searchParams.get('fid')
  const pfp = newUrl.searchParams.get('pfp')
  const followers = newUrl.searchParams.get('followers')
  const trendName = newUrl.searchParams.get('chosenTrend')
  
  return NextResponse.redirect(
      `${TREND_MARKET_FE_URL}/trends?activeTab=top&chosenTrend=${trendName}&frameId=${FRAME_ID}&fid=${fid}&pfp=${pfp}&followers=${followers}&referralAddress=${REFERRAL_ADDRESS}`,
      {status: 302}
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
