/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FIRST_TREND, SECOND_TREND } from '@/app/lib/constants';
import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET()
{
  const interExtrabold = fetch(
    new URL('../../../public/Inter-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interBold = fetch(
    new URL('../../../public/Inter-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interMedium = fetch(
    new URL('../../../public/Inter-Medium.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interExtraLight = fetch(
    new URL('../../../public/Inter-ExtraLight.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const interSemiBold = fetch(
    new URL('../../../public/Inter-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundImage: 'url(https://res.cloudinary.com/dwc808l7t/image/upload/v1709812924/farcaster-frames/background_tylikk.png)',
        }}
      >
        <img
          src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709812996/farcaster-frames/logo_s6yzop.png'
          width='75px'
          height='75px'
          style={{
            position: 'absolute',
            top: '25px', // Adjust as needed
            left: '20px', // Adjust as needed
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            fontStyle: 'normal',
            marginTop: '20px'
          }}
        >
          <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709812588/farcaster-frames/single-fake-gold-dollar-coin_2_glamru.png' width='80px' height='80px' />
          <b style={{ fontSize: '25px', color: '#76787A', fontWeight: 'bolder', fontFamily: 'Inter Medium' }}>Current Payout </b>
          <b style={{ fontSize: '42px', color: 'white', fontFamily: 'Inter Bold' }}>100$</b>

          <div style={{ display: 'flex', marginTop: '50px' }}>

            <div style={{ display: 'flex', backgroundColor: '#1DA1F2', borderRadius: '20px', height: '60px', position: 'relative', top: '-25px', width: '200px' }}>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', height: '60px', borderRadius: '20px', top: '-8px', right: '-8px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  flexDirection: 'row', justifyContent: 'center',
                  width: '200px'
                }}>
                  <p style={{ color: 'white', marginLeft: '10px' }}>A</p>
                  <p style={{ color: 'white', marginTop: '15px', fontFamily: 'Inter Medium', wordBreak: 'break-all' }}>{FIRST_TREND}</p>
                </div>
              </div>

            </div>

            <b style={{ fontSize: '80px', color: '#1DA1F2', fontWeight: 800, fontFamily: 'Inter Bold' }}>VS</b>

            <div style={{ display: 'flex', backgroundColor: '#1DA1F2', borderRadius: '20px', height: '55px', position: 'relative', bottom: '-84px', left: '-40px', width: '200px', }}>

              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', height: '60px', borderRadius: '20px', top: '-10px', right: '-8px', width: '200px'
              }}>
                <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709733700/game-launcher/b-icon_v2s13r.png' width='14px' />
                <p style={{ color: 'white', marginTop: '15px', marginLeft: '6px', fontFamily: 'Inter Medium' }}>{SECOND_TREND}</p>
              </div>

            </div>



          </div>
          <p style={{ color: '#76787A', width: '400px', fontSize: '28px', fontWeight: 400, marginTop: '100px', fontFamily: 'Inter Medium' }}>Which trend will be most popular today?</p>
        </div>

      </div>
    ),
    {
      width: 600,
      height: 600,
      fonts: [
        {
          name: 'Inter Extra Bold',
          data: await interExtrabold,
          style: 'normal',
        },
        {
          name: 'Inter Medium',
          data: await interMedium,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await interExtraLight,
          style: 'normal',
          weight: 200
        },
        {
          name: 'Inter Semi Bold',
          data: await interSemiBold,
          style: 'normal',
        },
        {
          name: 'Inter Bold',
          data: await interBold,
          style: 'normal',

        },

      ],
    },
  );
}
