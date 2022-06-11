import { AxiosResponse } from "axios";
import $api from "../http";
import { CreateTask, Task, UpdateTask } from "../types/task";

const TASK_URL = '/tasks'

export default class TasksService {
  static async createTask(task: CreateTask): Promise<AxiosResponse<Task>> {
    return (await $api.post(TASK_URL, task)).data;
  }

  static async updateTask({ id, ...dto} = {} as UpdateTask): Promise<AxiosResponse<Task>> {
    console.group(id, dto)
    return (await $api.patch(TASK_URL + `/${id}`, dto)).data;
  }

  static async getAllTasks(): Promise<AxiosResponse<Task[]>> {
    return (await $api.get('https://coursach-fullstack.herokuapp.com/tasks')).data;
  }

  static async deleteTask(id: string): Promise<void> {
    await $api.delete(TASK_URL + `/${id}`);
  }
}