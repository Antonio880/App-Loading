import React from "react";
import TaskCard from "./TaskCard";

export default function Completed({ completedTasks }) {
  // const removeFromCompleted = (taskId) => {
  //   setTasksCompleted((prevFavorites) =>
  //     prevFavorites.filter((task) => task.id !== taskId)
  //   );
  // };

  return (
    <div className="task-list">
    <h3>Tarefas Completas</h3>
    {completedTasks.map((task) => (
      <div key={task.id} className="task-card">
        <p>{task.task}</p>
        <p>{task.time}</p>
        <p>{task.category}</p>
      </div>
    ))}
  </div>
  );
}
