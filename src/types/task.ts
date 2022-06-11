export interface Task {
  id: string;

  body: string;

  completed: boolean;
}

export interface CreateTask {
  body: string;
}

export interface UpdateTask {
  id: string;

  body?: string;

  completed?: boolean; 
}

export interface TaskReducer {
  tasksReducer: TaskState;
}

export interface TaskState {
  tasks: Task[];
}