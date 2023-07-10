import { useEffect, useState } from "react";
import { getApi } from "../api/getApi";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, seTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getApi();
      seTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
