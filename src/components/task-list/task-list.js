import React from 'react';

import Task from '../task/task';

function TaskList({ todos }) {
  return (
    <ul className="todo-list" key="task-list">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TaskList;
