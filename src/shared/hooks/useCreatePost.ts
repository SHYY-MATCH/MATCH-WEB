import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

interface CreatePostRequest {
  title: string;
  content: string;
}

interface CreatePostResponse {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  author: {
    id: number;
    nickname: string;
  };
}

export const useCreatePost = () => {
  return useMutation<CreatePostResponse, Error, CreatePostRequest>({
    mutationFn: async (payload) => {
      console.log("보내는 payload", payload);
      return await api.post("/posts", payload, {
        headers: { "Content-Type": "application/json" },
      });
    },
  });
};
