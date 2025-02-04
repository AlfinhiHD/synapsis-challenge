import { PostType } from "@/types/posts.types";
import instance from "@/utils/axios";

export const postApi = {
    getUserPosts: async (userId: number) => {
      const response = await instance.get<PostType[]>(`/users/${userId}/posts`);
      return response.data;
    }
  };
  
