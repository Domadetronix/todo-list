import React from "react";
import Task from '../task/task.js'

const TaskList = (props) => {
    return (
    <ul className="todo-list">
        {props.todos.map((todo) => {
            return <Task todo = {todo} conditionChange={props.conditionChange}/>
        })}
    </ul>
    )
}

export default TaskList