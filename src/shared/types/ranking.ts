export interface RankingUser {
  id: number;
  nickname: string;
  winCount: number;
  loseCount: number;
  maxProfitRate: number;
  money: number;
}

export type RankingResponse = RankingUser[];
