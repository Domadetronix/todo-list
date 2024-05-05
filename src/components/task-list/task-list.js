import React, { useContext } from "react";
import Task from '../task/task.js'
import Context from "../../context.js";



const TaskList = (props) => {
    return (
    <ul className="todo-list" key="task-list">
        {props.todos.map((todo) => {
            return <Task key = {todo.id} todo = {todo} />
        })}
    </ul>
    )
}

export default TaskList