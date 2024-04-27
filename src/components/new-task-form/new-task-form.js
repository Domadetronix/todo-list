import React, { useState } from "react";

const NewTaskForm = (onCreate) => {
    const {value, setValue} = useState('')

    function submitNewTask(event) {
        if (value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return (
        <header class="header">
            <h1>todo</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus onKeyDown={ (event) => {if(event.code == "Enter") submitNewTask()}}/>
        </header>
    )
}

export default NewTaskForm