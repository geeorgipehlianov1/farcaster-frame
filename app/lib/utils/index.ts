import { FIRST_TREND, SECOND_TREND } from "../constants";
import { Trend } from "../types";

export const getTrendsRanks = (topTrends: Trend[]) => {
    const trend1Index = topTrends.map(trend => trend.trend).indexOf(FIRST_TREND);
    const trend2Index = topTrends.map(trend => trend.trend).indexOf(SECOND_TREND);
    const trendRank1 = trend1Index + 1;
    const trendRank2 = trend2Index + 1;

    return {
        trendRank1,
        trendRank2
    }
}
