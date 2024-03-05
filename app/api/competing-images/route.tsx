/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}>
          <p style={{ fontSize: '29px', fontWeight: 500, color: '#454647' }}>Current Payout</p>
          <p style={{fontSize: '42px', fontWeight: 700, color: 'white'}}>100$</p>
        </div>
      </div>
    ),
  );
}
