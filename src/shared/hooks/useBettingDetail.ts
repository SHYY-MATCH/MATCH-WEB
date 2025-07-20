import { useQuery } from "@tanstack/react-query";
import { getBettingDetail } from "../lib/bettingApi";
import { BettingDetail } from "../types/betting";

export const useBettingDetail = (bettingId: number) => {
  return useQuery<BettingDetail>({
    queryKey: ["bettingDetail", bettingId],
    queryFn: () => getBettingDetail(bettingId),
    enabled: !!bettingId,
  });
};
