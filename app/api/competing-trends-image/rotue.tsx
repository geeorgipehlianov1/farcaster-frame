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
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={`https://github.com/${username}.png`}
          style={{
            borderRadius: 128,
          }}
        />
        <p>github.com/{username}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
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
