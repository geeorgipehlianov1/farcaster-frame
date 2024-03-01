import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';

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
    src: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709108618/Screenshot_2024-02-28_at_10.23.18_nvvx10.png',
    aspectRatio: '1.91:1'
  },
  postUrl: 'https://farcaster-frame-seven.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Trends Market Farcaster Frame',
  description: 'This games aims to add interactivity to buying trends',
  openGraph: {
    title: 'Trends Market Farcaster Frame',
    description: 'This games aims to add interactivity to buying trends',
    images: 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709108618/Screenshot_2024-02-28_at_10.23.18_nvvx10.png',
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
