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
      if (Array.isArray(res.data)) {
        return res.data;
      }
      if (typeof res.data === "string") {
        try {
          const parsed = JSON.parse(res.data);
          if (Array.isArray(parsed)) return parsed;
        } catch (e) {}
      }
      return [];
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

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  writer: {
    id: number;
    username: string;
  };
}

export const useGetComments = (postId: number) => {
  return useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await api.get(`/posts/${postId}/comments`);
      return res.data;
    },
    enabled: !!postId,
  });
};

export const useCreateComment = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation<Comment, Error, { content: string }>({
    mutationFn: async (payload) => {
      const res = await api.post(`/posts/${postId}/comments`, null, {
        params: payload,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });
};
