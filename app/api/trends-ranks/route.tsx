/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request)
{
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  // if (!username)
  // {
  //   return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
  //     width: 1200,
  //     height: 630,
  //   });
  // }

  interface Trend
  {
    trend: string;
    trendHash: string;
    holders: number;
    shareSupply: number;
    rank1h: number;
    rank6h: number;
    price: string;
  }

  let topTrends: Trend[] = [];

  // THIS CODE WILL BE USE TO GET THE TREND RANK AND HASH (IF NEEDED)
  const currentTrends = ['#EDCLV2024', '$QORPO'];
  await fetch('https://trends-market-paoph.ondigitalocean.app/trends?type=top30', { method: 'GET' })
    .then(response => response.json())
    .then(data =>
    {
      topTrends = data.trends;
    })
    .catch(err => console.error(err));

  const trend1Index = topTrends.map(trend => trend.trend).indexOf(currentTrends[0]);
  const trend2Index = topTrends.map(trend => trend.trend).indexOf(currentTrends[0]);
  const trendRank1 = trend1Index + 1;
  const trendRank2 = trend2Index + 1;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundColor: 'white',
          backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            height={80}
            viewBox="0 0 75 65"
            fill="black"
            style={{ margin: '0 75px' }}
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 'bolder',
            fontStyle: 'normal',
            color: 'black',
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          <b>Vercel Edge Network</b>
        </div>
      </div>
    ),
  );
}
