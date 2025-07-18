import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

export const useUserDelete = () => {
  return useMutation({
    mutationFn: async () => {
      const accessToken = localStorage.getItem("accessToken");
      await api.delete("/auth/quit", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      localStorage.clear();
      window.location.href = "/";
    },
    onError: () => {
      alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
    },
  });
};
