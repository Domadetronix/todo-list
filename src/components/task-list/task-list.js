import React from "react";
import Task from '../task/task.js'

const TaskList = (props) => {
    return (
    <ul className="todo-list" key="task-list">
        {props.todos.map((todo) => {
            return <Task todo = {todo} conditionChange={props.conditionChange} editConditionChange = {props.editConditionChange} renameTodo={props.renameTodo}/>
        })}
    </ul>
    )
}

export default TaskList