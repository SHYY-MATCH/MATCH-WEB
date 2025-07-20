export interface BettingTeam {
  teamId: number;
  teamName: string;
  totalAmount: number;
  odds: number;
  participantCount: number;
}

export interface Betting {
  bettingId: number;
  sportName: string;
  openedAt: string;
  teams: BettingTeam[];
}

export interface BettingDetail {
  bettingId: number;
  sportName: string;
  openedAt: string;
  teams: BettingTeam[];
}

export interface BettingRequest {
  amount: number;
}

export interface BettingResponse {
  teamTotalAmount: number;
  updatedOdds: number;
}
