/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
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
    backgroundImage: 'url(https://res.cloudinary.com/dwc808l7t/image/upload/v1709709855/game-launcher/background_gfb8pt.svg)',
  }}
>
  <img
    src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709710275/game-launcher/logo_t4edcj.svg'
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
    <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709710110/game-launcher/sign_qiqavj.svg' width='80px' height='80px'/>
    <b style={{fontSize: '25px', color:'#76787A', fontWeight:'bolder'}}>Current Payout </b>
    <b style={{fontSize: '42px', color: 'white'}}>100$</b>

  <div style={{display: 'flex', marginTop: '50px'}}>

    <div style={{display: 'flex', backgroundColor:'#1DA1F2', borderRadius: '20px', height: '60px', position: 'relative', top: '-20px', width: '200px'}}>

    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', height: '60px', borderRadius: '20px', top: '-8px', right: '-10px', width: '200px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap:'6px', 
        flexDirection: 'row', justifyContent: 'center'}}>
    <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709733465/game-launcher/a-icon_fbpyeo.png' width='14px'/>
    <p style={{color:'white', marginTop: '15px'}}>#MondayMotivation</p>

      </div>
    </div>

    </div>

    <b style={{fontSize: '80px', color: '#1DA1F2', fontWeight: 'bolder'}}>VS</b>

      <div style={{display: 'flex', backgroundColor:'#1DA1F2', borderRadius: '20px', height: '55px', position: 'relative', bottom: '-92px', left: '-40px', width: '200px',}}>

    <div style={{display: 'flex', alignItems: 'center', 
                justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', height: '60px', borderRadius: '20px', top: '-10px', right: '-10px', width: '200px'
              }}>
          <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709733700/game-launcher/b-icon_v2s13r.png' width='14px'/>
      <p style={{color:'white', marginTop: '15px', marginLeft: '6px'}}>Jason Kelce</p>
    </div>

    </div>



  </div>
    <p style={{color:'#76787A', width: '400px', fontSize: '28px', marginTop: '100px'}}>Which trend will be most popular today?</p>
  </div>

</div>
    ),
    {
      width: 600,
      height: 600,
    },
  );
}
