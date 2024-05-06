import React, { useContext, useState } from 'react';

import Context from '../../context';

function NewTaskForm() {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(Context);
  function submitNewTask(event) {
    event.preventDefault();
    if (value.trim()) {
      addTodo(value);
    }
    setValue('');
  }
  return (
    <form className="header" onSubmit={submitNewTask}>
      <h1>todo</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;
