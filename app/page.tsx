import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';
import { baseUrl } from './lib/constants';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Kalos Trend',
    },
    {
      label: 'Max Strus Trend',
    },
  ],
  image: {
    src: `${baseUrl}/api/competing-images?username=geeorgipehlianov1`,
    aspectRatio: '1.91:1'
  },
  postUrl: `${baseUrl}/api/competing-trends`,
});

export const metadata: Metadata = {
  title: 'Trends Market Farcaster Frame',
  description: 'This games aims to add interactivity to buying trends',
  openGraph: {
    title: 'Trends Market Farcaster Frame',
    description: 'This games aims to add interactivity to buying trends',
    images: `${baseUrl}/api/competing-images?username=geeorgipehlianov1`,
  },
  other: {
    ...frameMetadata,
  },
};


export default function Home()
{
  return (
   <h1>Hello From My Personal Farcaster Frame</h1>
  );
}


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
