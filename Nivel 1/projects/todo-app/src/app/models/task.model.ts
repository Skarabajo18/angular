export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  completed: boolean;
}

export interface TaskPayload {
  title: string;
  description: string;
}