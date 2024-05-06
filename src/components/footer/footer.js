import React, { useContext } from 'react';

import Context from '../../context';

function TodoFooter() {
  const { countLeftTasks, clearCompleted, selectedFilter, setSelectedFilter } = useContext(Context);

  return (
    <footer className="footer">
      <span className="todo-count">{countLeftTasks()} items left</span>
      <ul className="filters">
        <li>
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={selectedFilter === 'all' ? 'selected : null}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={selectedFilter === 'active' ? 'selected' : null}
            onClick={() => setSelectedFilter('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={selectedFilter === 'completed' ? 'selected' : null}
            onClick={() => setSelectedFilter('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button type="button" className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

export default TodoFooter;
