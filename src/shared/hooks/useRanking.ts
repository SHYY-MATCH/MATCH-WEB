import { useQuery } from "@tanstack/react-query";
import { getRanking } from "../lib/rankingApi";

export const useRanking = () => {
  return useQuery({
    queryKey: ["ranking"],
    queryFn: getRanking,
  });
};
