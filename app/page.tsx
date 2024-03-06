import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';
import { BASE_URL, FIRST_TREND, SECOND_TREND } from './lib/constants';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: `${FIRST_TREND}`,
    },
    {
      label: `${SECOND_TREND}`,
    },
  ],
  image: {
    src: `${BASE_URL}/api/competing-images`,
    aspectRatio: '1:1'
  },
  postUrl: `${BASE_URL}/api/competing-trends`,
});

export const metadata: Metadata = {
  title: 'Trends Market Farcaster Frame',
  description: 'This games aims to add interactivity to buying trends',
  openGraph: {
    title: 'Trends Market Farcaster Frame',
    description: 'This games aims to add interactivity to buying trends',
    images: `https://www.google.com/search?sca_esv=02097b259e5129ad&q=google+image&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiq9ZeN69yEAxVMSvEDHfXSBqIQ0pQJegQIDRAB&biw=1440&bih=743&dpr=2#imgrc=bI7-ui1iO6yF-M`,
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

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     label: `Follow @trends`,
//     action: 'link',
//     target: 'https://warpcast.com/~/channel/perl'
//   ],
//   image: {
//     src: `${BASE_URL}/api/trend-expired`,
//     aspectRatio: '1.91:1'
//   },
// });


// export const metadata: Metadata = {
//   title: 'Trends Market Farcaster Frame',
//   description: 'This games aims to add interactivity to buying trends',
//   openGraph: {
//     title: 'Trends Market Farcaster Frame',
//     description: 'This games aims to add interactivity to buying trends',
//     images: `https://www.google.com/search?sca_esv=02097b259e5129ad&q=google+image&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiq9ZeN69yEAxVMSvEDHfXSBqIQ0pQJegQIDRAB&biw=1440&bih=743&dpr=2#imgrc=bI7-ui1iO6yF-M`, // NOT SURE IF NEEDED
//   },
//   other: {
//     ...frameMetadata,
//   },
// };
