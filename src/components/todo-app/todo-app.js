import React, { useEffect, useState } from 'react';

import Context from '../../context';
import TaskList from '../task-list/task-list';
import NewTaskForm from '../new-task-form/new-task-form';
import TodoFooter from '../footer/footer';

function TodoApp() {
  const initialTodos = [
    /*
        { id: 1, name: 'Completed task', isActive:true},
        { id: 2, name: 'Second task', isActive:true},
        {id: 3, name: 'Active task', isActive:true} */
  ];
  const [todos, setTodos] = useState(initialTodos);

  const [visibleTodos, setVisibleTodos] = useState(initialTodos);

  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    setVisibleTodos(
      todos.filter((todo) => {
        if (selectedFilter === 'active') return todo.isActive;
        if (selectedFilter === 'completed') return !todo.isActive;
        return true;
      })
    );
  }, [selectedFilter, todos]);

  function conditionChange(id) {
    setTodos(
      todos.map((todo) => {
        const task = todo;
        if (todo.id === id) {
          task.isActive = !task.isActive;
        }
        return task;
      })
    );
  }

  function editConditionChange(id) {
    setTodos(
      todos.map((todo) => {
        const task = todo;
        if (task.id === id) {
          task.isEditing = !task.isEditing;
        }
        return task;
      })
    );
  }

  function renameTodo(id, value) {
    setTodos(
      todos.map((todo) => {
        const task = todo;
        if (task.id === id) task.name = value;
        task.isEditing = false;
        return task;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(name) {
    setTodos(
      todos.concat([
        {
          name,
          id: Date.now().valueOf(),
          condition: 'default',
          isActive: true,
        },
      ])
    );
  }

  function countLeftTasks() {
    return todos.reduce((counter, todo) => {
      // eslint-disable-next-line no-param-reassign
      if (todo.isActive) counter += 1;
      return counter;
    }, 0);
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => todo.isActive));
  }

  return (
    <Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        addTodo,
        removeTodo,
        conditionChange,
        editConditionChange,
        renameTodo,
        countLeftTasks,
        clearCompleted,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList todos={visibleTodos} />
          <TodoFooter />
        </section>
      </section>
    </Context.Provider>
  );
}

export default TodoApp;
