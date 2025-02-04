import { TodoType } from "@/types/todos.type";
import instance from "@/utils/axios";

export type CreateTodoData = {
  title: string;
  due_on: string;
  status: string;
};

export const todoApi = {
  getTodos: async (page: number = 1, per_page: number = 10) => {
    const response = await instance.get<TodoType[]>(`/todos?page=${page}&per_page=${per_page}`);
    return response;
  },

  getUserTodos: async (userId: number, page: number = 1, per_page: number = 10) => {
    const response = await instance.get<TodoType[]>(`/users/${userId}/todos?page=${page}&per_page=${per_page}`);
    return response;
  },

  createTodo: async (userId: number, todoData: CreateTodoData) => {
    const response = await instance.post<TodoType>(`/users/${userId}/todos`, todoData);
    return response.data;
  },

  updateTodo: async (id: number, todoData: Partial<CreateTodoData>) => {
    const response = await instance.put<TodoType>(`/todos/${id}`, todoData);
    return response.data;
  },

  deleteTodo: async (id: number) => {
    await instance.delete(`/todos/${id}`);
  },
};