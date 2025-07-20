import { useQuery } from "@tanstack/react-query";
import { getBettingList } from "../lib/bettingApi";
import { Betting } from "../types/betting";

export const useBettingList = () => {
  return useQuery<Betting[]>({
    queryKey: ["bettingList"],
    queryFn: getBettingList,
  });
};
