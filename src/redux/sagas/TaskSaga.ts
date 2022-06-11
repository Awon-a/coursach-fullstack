import { Effect } from "@redux-saga/types";
import { CreateTaskAction, DeleteTaskAction, requestTaskFailed, requestTaskSuccess, TaskActions, UpdateTaskAction } from "../actions/task";
import { call, put, takeEvery } from 'redux-saga/effects'
import TasksService from "../../services/TasksService";
import { Task } from "../../types/task";

function* createTaskSaga(action: CreateTaskAction): Generator<Effect, void> {
  try {
    const userId = JSON.parse(localStorage.getItem('user')!).id;
    const newTask = {
      body: action.payload.body,
      userId,
    };

    const createdTask = yield call(TasksService.createTask, newTask);

    yield put(requestTaskSuccess(TaskActions.SUCCESS_CREATE_TASK, createdTask));
  } catch (e) {
    yield put(requestTaskFailed());
  }
}

function* getTasksSaga(): Generator<Effect, void, Task[]> {
  try {
    const tasks = yield call(TasksService.getAllTasks);
    
    yield put(requestTaskSuccess(TaskActions.SUCCESS_GET_TASK, tasks));
  } catch (e) {
    yield put(requestTaskFailed());
  }
}

function* updateTaskSaga(action: UpdateTaskAction): Generator<Effect, void> {
  try {
    const updateTask = action.payload;

    const updatedTask = yield call(TasksService.updateTask, updateTask);

    yield put(requestTaskSuccess(TaskActions.SUCCESS_UPDATE_TASK, updatedTask));
  } catch (e) {
    yield put(requestTaskFailed());
  }
}

function* deleteTaskSaga(action: DeleteTaskAction): Generator<Effect, void> {
  try {
    const taskId = action.payload;

    yield call(TasksService.deleteTask, taskId);

    yield put(requestTaskSuccess(TaskActions.SUCCESS_DELETE_TASK, taskId));
  } catch (e) {
    yield put(requestTaskFailed());
  }
}

export function* watcherTasksSaga(): Generator<Effect, void> {
  yield takeEvery(TaskActions.CREATE_TASK, createTaskSaga);
  yield takeEvery(TaskActions.GET_TASK, getTasksSaga);
  yield takeEvery(TaskActions.UPDATE_TASK, updateTaskSaga);
  yield takeEvery(TaskActions.DELETE_TASK, deleteTaskSaga);
}