/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  if (!username) {
    return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

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
     display: 'flex',
        flexWrap: 'wrap', // Wrap items to the next line if necessary
        background: '#f6f6f6',
        width: '100%',
        height: '100%',
        padding: '10px', // Padding around the grid
        boxSizing: 'border-box', // Include padding in the width/height
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center', // Center items vertically
      }}
    >
      {Array.from({ length: 200 }).map((_, index) => (
        <img
          key={index}
          width="30"
          height="30"
          src={`https://github.com/${username}.png`}
          style={{
            borderRadius: '4px', // Rounded corners for each image
            objectFit: 'cover', // Scale the image to cover its entire area
          }}
        />
      ))}
    </div>
  ),
);

}
