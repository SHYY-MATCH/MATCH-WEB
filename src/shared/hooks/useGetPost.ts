// src/shared/hooks/useGetPosts.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

export interface PostDetail {
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

export const useGetPost = (postId: number) => {
  return useQuery<PostDetail>({
    queryKey: ["post", postId],
    queryFn: async () => {
      const res = await api.get(`/posts/${postId}`);
      return res.data;
    },
    enabled: !!postId,
  });
};

export const useLikePost = (postId: number) => {
  return useMutation({
    mutationFn: async () => {
      await api.post(`/posts/${postId}/like`);
    },
  });
};

export const useUnlikePost = (postId: number) => {
  return useMutation({
    mutationFn: async () => {
      await api.delete(`/posts/${postId}/like`);
    },
  });
};

export const useIncreaseViewPost = (postId: number) => {
  return useMutation({
    mutationFn: async () => {
      await api.get(`/posts/view/${postId}`);
    },
  });
};
