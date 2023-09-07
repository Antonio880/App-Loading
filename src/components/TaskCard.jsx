import React from 'react';

export function TaskCard ({ task, time, id,  isCompleted, toggleFavorite, onRemove }){
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
  }

  const handleRemoveClick = () => {
    onRemove(task); // Chama a função de remoção quando o botão for clicado
  };

  const handleFavoriteClick = () => {
    toggleFavorite(task.id);
    console.log(task.id);
  };

  return (
  <div>
    {task.task ? (
      <div className="task-card" style={taskStyle}>
        <h5>{task.task}</h5>
        <label onClick={handleRemoveClick}>🗑️</label>
        <p>{task.time}</p>
        {!task.isCompleted ? (
            <span onClick={handleFavoriteClick}>✩</span>
            ) : (
            <span onClick={handleFavoriteClick}>🌟</span>
          )}
      </div>
    ) : (
      <h3>Inicio</h3>
    )}
  </div>
  );
};

export default TaskCard;