/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  return new ImageResponse (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        // backgroundImage: 'url(https://res.cloudinary.com/dwc808l7t/image/upload/v1709709855/game-launcher/background_gfb8pt.svg)',
      }}
    >
      <img
        src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709710275/game-launcher/logo_t4edcj.svg'
        width='70px'
        height='70px'
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
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
        <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709710110/game-launcher/sign_qiqavj.svg' width='80px' height='80px' />
        <b style={{ fontSize: '30px', color: '#76787A' }}>Current Payout </b>
        <b style={{ fontSize: '35px', color: 'white', fontWeight: 'bolder' }}>100$</b>
      </div>
    </div>,
    {
      width: 600,
      height: 1000,
    }
  )
}
