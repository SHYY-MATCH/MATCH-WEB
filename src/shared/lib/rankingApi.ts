import type { RankingResponse } from "../types/ranking";
import { api } from "./axios";

export const getRanking = async (): Promise<RankingResponse> => {
  const response = await api.get<RankingResponse>("/user/ranking");
  return response.data;
};
