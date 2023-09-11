// Em TaskCard.js

import React, { useState } from 'react';

export function TaskCard({ task, toggleFavorite, onRemove, onEdit, onSaveEdit, isEditing, selectedCategory }) {
  // Novo estado para controlar a edição de texto
  const [editedText, setEditedText] = useState(task.task);

  const handleRemoveClick = () => {
    onRemove(task);
  };

  const handleFavoriteClick = () => {
    toggleFavorite(task.id);
  };

  const handleEditClick = () => {
    onEdit(task.id);
  };

  const handleSaveEditClick = () => {
    onSaveEdit(task.id, editedText);
  };

  const handleCancelEditClick = () => {
    setEditedText(task.task);
    onEdit(null); // Encerra a edição
  };

  return (
    <div>
      {isEditing ? (
        <div className="edit-task">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-light" onClick={handleSaveEditClick}>
            Save
          </button>
          <button className="btn btn-outline" onClick={handleCancelEditClick}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="task-card">
          <h5>{task.task}</h5>
          <label className='icon' onClick={handleRemoveClick}>🗑️</label>
          <p>{task.time}</p>
          {!task.isCompleted ? (
            <span onClick={handleFavoriteClick} className='icon'>✩</span>
          ) : (
            <span onClick={handleFavoriteClick} className='icon'>🌟</span>
          )}
          <h6>{task.category}</h6>
          <button type="button" className="btn btn-secondary" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
