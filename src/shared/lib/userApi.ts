import { api } from "./axios";
import { UserStatusResponse } from "../types/user";

export const getUserStatus = async (): Promise<UserStatusResponse> => {
  const response = await api.get("/user/status");
  return response.data;
};
