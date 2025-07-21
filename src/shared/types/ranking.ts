export interface RankingUser {
  id: number;
  nickname: string;
  winCount: number;
  loseCount: number;
  maxProfitRate: number;
  money: number;
  recentResults?: string; // "승,승,패,승,승" 형식
}

export type RankingResponse = RankingUser[];
