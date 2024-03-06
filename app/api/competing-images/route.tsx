/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import type {SatoriOptions} from 'satori'
import satori from 'satori'

export async function GET(request: Request) {
  const fontSans = (baseUrl: string) =>
  fetch(new URL(`${baseUrl}/fonts/Inter-ExtraBold.otf`)).then((res) =>
    res.arrayBuffer()
  )
  const fontSansData = await fontSans('https://nextjs.org');
  const options: SatoriOptions = {
    width: 1200,
    height: 1200,
    fonts: [
      {
        name: 'Inter',
        data: fontSansData,
        style: 'normal',
      },
    ],
  }

  // Design the image and generate an SVG with "satori"
  const svg = await satori(
    <div
      style={{
        width: options.width,
        height: options.height,
        background: 'linear-gradient( 135deg, #FD6585 10%, #0D25B9 100%)',
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div>Title</div>
    </div>,
    options
  )



  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: 'grey',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg />
      </div>
    ),
  );
}
