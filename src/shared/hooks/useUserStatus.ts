import { useQuery } from "@tanstack/react-query";
import { getUserStatus } from "../lib/userApi";
import { UserStatusResponse } from "../types/user";

export const useUserStatus = () => {
  return useQuery<UserStatusResponse>({
    queryKey: ["userStatus"],
    queryFn: getUserStatus,
  });
};
