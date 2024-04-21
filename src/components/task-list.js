import React from "react";
import Task from './task.js'

const TaskList = () => {
    return (
    <ul className="todo-list">
        <Task name="Completed task" condition="completed"></Task>
        
        <Task name="Editing task" condition="editing"></Task>
        
        <Task name="Active task" condition='default'></Task>
    </ul>
    )
}

export default TaskList