import { UserFormData, UserType } from "@/types/users.types";
import instance from "@/utils/axios";

export const userApi = {
    getUsers: async (page: number = 1, per_page: number = 10) => {
      const response = await instance.get<UserType[]>(`/users?page=${page}&per_page=${per_page}`);
      return response;
    },
    getUser: async (id: number) => {
      const response = await instance.get<UserType>(`/users/${id}`);
      return response.data;
    },
    createUser: async (userData: UserFormData) => {
      const response = await instance.post<UserType>('/users', userData);
      return response.data;
    },
    updateUser: async (id: number, userData: Partial<UserFormData>) => {
      const response = await instance.put<UserType>(`/users/${id}`, userData);
      return response.data;
    },
    deleteUser: async (id: number) => {
      await instance.delete(`/users/${id}`);
    }
  };
  
