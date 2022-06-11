import { useDispatch, useSelector } from "react-redux";
import { updateTask as upTask, deleteTask as delTask } from "../redux/actions/task";
import { Task, TaskReducer, UpdateTask } from "../types/task";
import TaskItem from "./TaskItem";


const TaskList = () => {
  const state = useSelector((state: TaskReducer) => state.tasksReducer);
  const dispatch = useDispatch();

  const updateTask = (dto: UpdateTask) => {
    dispatch(upTask(dto));
  }

  const deleteTask = (id: string) => {
    dispatch(delTask(id));
  }

  let i = 0;
  return (
    <>
      {state.tasks.map(
        (task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        )
      )}
    </>
  );
}

export default TaskList;