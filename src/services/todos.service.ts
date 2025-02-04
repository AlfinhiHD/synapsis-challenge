import { TodoType } from "@/types/todos.type";
import instance from "@/utils/axios";

export const todoApi = {
    getUserTodos: async (userId: number) => {
      const response = await instance.get<TodoType[]>(`/users/${userId}/todos`);
      return response.data;
    }
  };