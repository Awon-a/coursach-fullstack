import { Task, TaskState } from "../../types/task";
import { TaskActions, TaskActionsTypes } from "../actions/task"

export const initialState = {
  tasks: [] as Task[],
}

export const tasksReducer = (state: TaskState = initialState, action: TaskActionsTypes) => {
  switch (action.type) {
    case TaskActions.SUCCESS_CREATE_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case TaskActions.SUCCESS_GET_TASK:
      return { ...state, tasks: action.payload };
    case TaskActions.SUCCESS_UPDATE_TASK:
      return {
        tasks: state.tasks.map(
          task => (
            task.id === action.payload.id ?
              { ...task, ...action.payload } :
              task
          )
        )
      };
    case TaskActions.SUCCESS_DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
    default:
      return state;
  }
}