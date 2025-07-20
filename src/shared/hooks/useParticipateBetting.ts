import { useMutation, useQueryClient } from "@tanstack/react-query";
import { participateBetting } from "../lib/bettingApi";
import { BettingResponse } from "../types/betting";

interface ParticipateBettingParams {
  bettingId: number;
  teamId: number;
  amount: number;
}

export const useParticipateBetting = () => {
  const queryClient = useQueryClient();

  return useMutation<BettingResponse, Error, ParticipateBettingParams>({
    mutationFn: ({ bettingId, teamId, amount }) =>
      participateBetting(bettingId, teamId, amount),
    onSuccess: (data, variables) => {
      // 배팅 상세 정보와 목록을 업데이트
      queryClient.invalidateQueries({
        queryKey: ["bettingDetail", variables.bettingId],
      });
      queryClient.invalidateQueries({ queryKey: ["bettingList"] });
    },
  });
};
