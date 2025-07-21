import type {
  Betting,
  BettingResponse,
  CreateBettingRequest,
  CreateBettingResponse,
} from "../types/betting";
import { api } from "./axios";

export const getBettingList = async (): Promise<Betting[]> => {
  const response = await api.get<Betting[]>("/bettings");
  return response.data;
};

export const getBettingDetail = async (bettingId: number): Promise<Betting> => {
  const response = await api.get<Betting>(`/bettings/${bettingId}`);
  return response.data;
};

export const participateBetting = async (
  bettingId: number,
  teamId: number,
  amount: number
): Promise<BettingResponse> => {
  const response = await api.post<BettingResponse>(
    `/bettings/${bettingId}/participate`,
    {
      teamId,
      amount,
    }
  );
  return response.data;
};

export const createBetting = async (
  request: CreateBettingRequest
): Promise<CreateBettingResponse> => {
  const response = await api.post<CreateBettingResponse>("/bettings", request);
  return response.data;
};
