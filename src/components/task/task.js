/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Context from '../../context';

function Task({ todo }) {
  let currentClass = todo.condition;

  const { conditionChange, editConditionChange, renameTodo, removeTodo } = useContext(Context);

  const [editValue, setEditValue] = useState(todo.name);

  function submitEdit(event) {
    event.preventDefault();
    if (editValue.trim()) {
      renameTodo(todo.id, editValue);
    }
    setEditValue('');
  }

  if (!todo.isActive) {
    currentClass = 'completed';
  }
  if (todo.isEditing) {
    currentClass = 'editing';
  }
  return (
    <li className={currentClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={!todo.isActive}
          onChange={() => {
            conditionChange(todo.id);
          }}
          id={todo.id}
        />
        <label htmlFor={todo.id}>
          <span className="description">{todo.name}</span>
          <span className="created">{formatDistanceToNow(todo.id, { addSuffix: true, includeSeconds: true })}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={() => editConditionChange(todo.id)} />
        <button type="button" className="icon icon-destroy" onClick={removeTodo.bind(null, todo.id)} />
      </div>

      {todo.isEditing ? (
        <form
          onSubmit={(event) => {
            submitEdit(event);
          }}
        >
          <input
            type="text"
            className="edit"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
          />
        </form>
      ) : null}
    </li>
  );
}

Task.defaultProps = { isVisible: true };

export default Task;
