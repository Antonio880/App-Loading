import React from "react";
import TaskCard from "./TaskCard";

export default function Completed({ completedTasks }) {
  // const removeFromCompleted = (taskId) => {
  //   setTasksCompleted((prevFavorites) =>
  //     prevFavorites.filter((task) => task.id !== taskId)
  //   );
  // };

  const taskStyle = {
    'position': 'relative',
    'left': '33%',
    'font-size': '12px',
    'padding-left': '2%',
    "height": '30px',
    'width': '30%',    
    'background': '#735bf2',
    'color': '#fff',
    'border-radius': '10px',
    'margin-bottom': '10px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'padding': '24px'
};

  return (
    <div>
    <h3>Tarefas Completas</h3>
    {completedTasks.map((task) => (
      <div key={task.id} style={taskStyle}>
        <p>{task.task}</p>
        <p>{task.time}</p>
        <p>{task.category}</p>
      </div>
    ))}
  </div>
  );
}
