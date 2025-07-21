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

export interface CreateBettingRequest {
  sportName: string;
  openedAt: string; // ISO 8601 형식 (예: "2025-01-21T10:00:00")
  teams: string[];
}

export interface CreateBettingResponse {
  bettingId: number;
  sportName: string;
  openedAt: string;
  teams: string[];
}
