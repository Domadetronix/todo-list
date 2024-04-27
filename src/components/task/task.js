import React, { useContext } from "react";
import Context from "../../context";

const Task = (props) => {
  let currentClass = props.todo.condition;
  const {removeTodo} = useContext(Context) 

  if (props.todo.condition == "editing") {
    return (
      <li className={currentClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={props.todo.completed}
          />
          <label>
            <span className="description">{props.todo.name}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={ () => removeTodo(props.todo.id)}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task"></input>
      </li>
    );
  }


  
    if (props.todo.completed) {
        currentClass = 'completed'
    } else currentClass = ''



  return (
    <li
      className={currentClass}
     >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
        />
        <label onClick={() => props.conditionChange(props.todo.id)}>
          <span className="description">{props.todo.name}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={removeTodo.bind(null, props.todo.id)}></button>
      </div>
    </li>
  );
};

export default Task;
