/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FIRST_TREND, SECOND_TREND, } from '@/app/lib/constants';
import { getChosenTrend, getTrends } from '@/app/lib/services/trends';
import { Trend } from '@/app/lib/types';
import { getTrendsRanks } from '@/app/lib/utils';
import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { ImageResponse } from 'next/og';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest)
{
    try
    {
        const newUrl = new URL(req.nextUrl)
        const trendName = newUrl.searchParams.get('chosenTrend')

        let topTrends: Trend[] = await getTrends();

        const {trendRank1, trendRank2} = getTrendsRanks(topTrends)


        const chosenTrend: any[] = await getChosenTrend(String(trendName));
        

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
                        <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709710110/game-launcher/sign_qiqavj.svg' width='80px' height='80px' />
                        <b style={{ fontSize: '30px', color: '#76787A' }}>Current Payout </b>
                        <b style={{ fontSize: '42px', color: 'white' }}>100$</b>

                        <div style={{ display: 'flex', marginTop: '30px' }}>

                            <div style={{ display: 'flex', backgroundColor: '#1DA1F2', borderRadius: '20px', height: '60px', position: 'relative', top: '-20px', width: '200px' }}>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', height: '60px', borderRadius: '20px', top: '-8px', right: '-10px', width: '200px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row', justifyContent: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row', justifyContent: 'center' }}>
                                            <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709817674/farcaster-frames/up-arrow_snt8x2.svg' width='12px' height='6px' />
                                            <p style={{ color: '#4CAF50' }}>{trendRank1}</p>
                                        </div>
                                        <p style={{ color: 'white', marginTop: '20px' }}>{FIRST_TREND}</p>
                                    </div>
                                </div>

                            </div>

                            <b style={{ fontSize: '90px', color: '#1DA1F2' }}>VS</b>

                            <div style={{ display: 'flex', backgroundColor: '#1DA1F2', borderRadius: '20px', height: '55px', position: 'relative', bottom: '-105px', left: '-40px', width: '200px', }}>

                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', backgroundColor: '#2C2D2E', position: 'relative', borderRadius: '20px', top: '-10px', right: '-10px', width: '200px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row', justifyContent: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row', justifyContent: 'center' }}>
                                            <img src='https://res.cloudinary.com/dwc808l7t/image/upload/v1709817674/farcaster-frames/up-arrow_snt8x2.svg' width='12px' height='6px' />
                                            <p style={{ color: '#4CAF50' }}>{trendRank2}</p>
                                        </div>
                                        <p style={{ color: 'white', marginTop: '20px' }}>{SECOND_TREND}</p>
                                    </div>
                                </div>

                            </div>



                        </div>
                        <p style={{ color: '#76787A', width: '400px', fontSize: '24px', marginTop: '60px' }}>To qualify to win, you need to buy the trend on trends.market</p>
                    </div>
                   {chosenTrend.length > 0 && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            style={{ backgroundColor: '#3c3c3c', borderRadius: '50px' }}
                            src={chosenTrend[0] ? chosenTrend[0].pfp : 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709730095/game-launcher/person_ink60b.svg'} width='57px' height='57px' />
                        <img style={{ backgroundColor: '#3c3c3c', borderRadius: '50px', position: 'relative', left: '-10' }} src={chosenTrend[1] ? chosenTrend[1].pfp : 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709730095/game-launcher/person_ink60b.svg'} width='57px' height='57px' />
                        <img style={{
                            backgroundColor: '#3c3c3c', borderRadius: '50px',
                            position: 'relative', left: '-18'
                        }} src={chosenTrend[2] ? chosenTrend[2].pfp : 'https://res.cloudinary.com/dwc808l7t/image/upload/v1709730095/game-launcher/person_ink60b.svg'} width='57px' height='57px' />
                        <p style={{ color: '#76787A', fontSize: '20px' }}>{chosenTrend.length > 3 ? `and ${chosenTrend.length}` : ''} <span style={{marginRight: '4px'}}>{chosenTrend.length > 3 ? ' others' : ''}</span> have bought a trend</p>
                    </div>}
                </div>

            ),
            {
                width: 600,
                height: 600,
            },
        );
    } catch (error)
    {
        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    {
                        label: `Follow Trends`,
                        action: 'link',
                        target: 'https://warpcast.com/~/channel/perl'
                    },
                ],
                image: {
                    src: `https://res.cloudinary.com/dwc808l7t/image/upload/v1709728658/game-launcher/not-found_jdlodv.svg`,
                    aspectRatio: '1:1'
                },
            }),
        );
    }


}
