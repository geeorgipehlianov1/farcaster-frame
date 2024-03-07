import { FRAME_ID, TRENDS_MARKET_BE_URL } from "../constants"

export const getTrends = async () =>
{
    const response = await fetch(`${TRENDS_MARKET_BE_URL}/trends?type=top30`, { method: 'GET' })

    if (!response.ok)
    {
        throw new Error('Failed get top trends');
    }

    const data = await response.json();
    return data.trends;
}

export const getChosenTrend = async (trendName: string) =>  {
    const response = await fetch(`${TRENDS_MARKET_BE_URL}/frames/${FRAME_ID}`, { method: 'GET' })  

    if (!response.ok)
    {
        throw new Error('Failed get chosen trend');
    }

    const data = await response.json()

    if (data.frame) {
        return data.frame[trendName];
    } else {
        return []
    }
}
