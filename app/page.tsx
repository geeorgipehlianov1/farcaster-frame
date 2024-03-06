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
    src: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709726903/game-launcher/competing-trends_ko3ja7.svg`,
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
    images: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709726903/game-launcher/competing-trends_ko3ja7.svg`,
  },
  other: {
    ...frameMetadata,
  },
};

// FOR EXPIRED TREND
// const frameMetadata = getFrameMetadata({
//   buttons: [{
//     label: `Follow @trends`,
//     action: 'link',
//     target: 'https://warpcast.com/~/channel/perl'
//   }
//   ],
//   image: {
//     src: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709728690/game-launcher/expired_wra8ir.svg',
//     aspectRatio: '1:1'
//   },
// });


// export const metadata: Metadata = {
//   title: 'Trends Market Farcaster Frame',
//   description: 'This games aims to add interactivity to buying trends',
//   openGraph: {
//     title: 'Trends Market Farcaster Frame',
//     description: 'This games aims to add interactivity to buying trends',
//     images: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709728690/game-launcher/expired_wra8ir.svg',
//   },
//   other: {
//     ...frameMetadata,
//   },
// };



export default function Home()
{
  return (
   <h1>Hello From My Personal Farcaster Frame</h1>
  );
}

