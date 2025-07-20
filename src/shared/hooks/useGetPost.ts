// src/shared/hooks/useGetPosts.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";

export type SortType = "latest" | "likes" | "views";

export interface PostItem {
  id: number;
  title: string;
  content: string;
  views: number;
  likes: number;
  createdAt: string;
  writer: {
    id: number;
    username: string;
  };
  comments: {
    id: number;
    content: string;
    writer: {
      id: number;
      username: string;
    };
  }[];
}

export const useGetPosts = (sort: SortType) => {
  return useQuery<PostItem[]>({
    queryKey: ["posts", sort],
    queryFn: async () => {
      const res = await api.get("/posts", { params: { sort } });
      return res.data;
    },
  });
};
