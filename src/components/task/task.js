import React, { useContext, useState } from "react";
import Context from "../../context";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = (props) => {
  let currentClass = props.todo.condition;
  
  const {conditionChange, editConditionChange, renameTodo, removeTodo} = useContext(Context)

  const [editValue, setEditValue] = useState(props.todo.name)


function submitEdit(event){
  event.preventDefault()
        if (editValue.trim()){
            renameTodo(props.todo.id, editValue)
        }
        setEditValue('')
    }

  if (!props.todo.isActive) {
    currentClass = 'completed'
  }
  if (props.todo.isEditing){
    currentClass  = 'editing'
  }
    return (
      <li className = {currentClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={!props.todo.isActive}
            onChange={() => {
              conditionChange(props.todo.id)
            }}
            id={props.todo.id}
          />
          <label htmlFor={props.todo.id}>
            <span className="description">{props.todo.name}</span>
            <span className="created">{formatDistanceToNow(props.todo.id, { addSuffix: true, includeSeconds: true })}</span>
          </label>
          <button className="icon icon-edit" onClick={()=>{ editConditionChange(props.todo.id)}}></button>
          <button className="icon icon-destroy" onClick={removeTodo.bind(null, props.todo.id)}></button>
        </div>

        {props.todo.isEditing ? <form onSubmit={event => {
          console.log(event)
          submitEdit(event)
          }}><input type="text" className="edit" defaultValue="isEditing task" value={editValue} onChange={event => setEditValue(event.target.value)}/></form> : null}
      </li>
    );
  };

Task.defaultProps = {isVisible:true}

export default Task;
