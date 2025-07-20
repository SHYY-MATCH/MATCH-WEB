import { api } from "./axios";
import {
  Betting,
  BettingDetail,
  BettingRequest,
  BettingResponse,
} from "../types/betting";

export const getBettingList = async (): Promise<Betting[]> => {
  const response = await api.get("/bettings");
  return response.data;
};

export const getBettingDetail = async (
  bettingId: number
): Promise<BettingDetail> => {
  const response = await api.get(`/bettings/${bettingId}`);
  return response.data;
};

export const participateBetting = async (
  bettingId: number,
  teamId: number,
  amount: number
): Promise<BettingResponse> => {
  const response = await api.post(
    `/bettings/${bettingId}/teams/${teamId}/bet`,
    {
      amount,
    }
  );
  return response.data;
};
