export enum TodoStatus {
    Pending = "pending",
    Completed = "completed"
  }

export interface TodoType {
    id: number;
    user_id: number;
    title: string;
    due_on: string;
    status: TodoStatus;
  }