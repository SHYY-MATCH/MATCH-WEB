import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (code: string) => {
      const res = await api.get(`/auth/login?code=${code}`);
      return res.data;
    },
  });
};
