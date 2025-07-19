import { api } from "./axios";
import { RankingResponse } from "../types/ranking";

export const getRanking = async (): Promise<RankingResponse> => {
  const response = await api.get<RankingResponse>("/user/ranking");
  return response.data;
};
