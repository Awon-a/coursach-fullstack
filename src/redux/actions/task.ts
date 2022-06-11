import { CreateTask, Task, UpdateTask } from "../../types/task";

export const requestTaskSuccess = (type: TaskActions, payload?: any) => ({
  type,
  payload,
});

export const requestTaskFailed = () => ({
  type: 'REQUEST_TASK_FAILED',
});

export enum TaskActions {
  CREATE_TASK = 'CREATE_TASK',
  SUCCESS_CREATE_TASK = 'SUCCESS_CREATE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
  SUCCESS_UPDATE_TASK = 'SUCCESS_UPDATE_TASK',
  GET_TASK = 'GET_TASK',
  SUCCESS_GET_TASK = 'SUCCESS_GET_TASK',
  DELETE_TASK = 'DELETE_TASK',
  SUCCESS_DELETE_TASK = 'SUCCESS_DELETE_TASK',
}

export interface CreateTaskAction {
  type: TaskActions.SUCCESS_CREATE_TASK | TaskActions.CREATE_TASK,
  payload: Task,
}

export interface UpdateTaskAction {
  type: TaskActions.SUCCESS_UPDATE_TASK | TaskActions.UPDATE_TASK;
  payload: UpdateTask,
}

export interface GetTaskAction {
  type: TaskActions.SUCCESS_GET_TASK | TaskActions.GET_TASK,
  payload?: string;
}

export interface DeleteTaskAction {
  type: TaskActions.SUCCESS_DELETE_TASK | TaskActions.DELETE_TASK,
  payload: string,
}

export type TaskActionsTypes = CreateTaskAction | GetTaskAction | UpdateTaskAction | DeleteTaskAction;

export const updateTask = (payload: UpdateTask) => {
  return { 
    type: TaskActions.UPDATE_TASK,
    payload,
  }
}

export const deleteTask = (payload: string) => {
  return {
    type: TaskActions.DELETE_TASK,
    payload,
  }
}

export const createTask = (payload: CreateTask) => {
  return {
    type: TaskActions.CREATE_TASK,
    payload,
  }
}

export const getTask = () => {
  return {
    type: TaskActions.GET_TASK,
  }
}
