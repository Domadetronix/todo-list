import React, { useState } from "react";

const NewTaskForm = ({onCreate}) => {
    const [value, setValue] = useState('')

    function submitNewTask(event) {
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
        }
        setValue('')
    }
    return (
        <form className="header" onSubmit={submitNewTask}>
            <h1>todo</h1>
            <input className = "new-todo" placeholder="What needs to be done?" value = {value} autoFocus onChange={event => setValue(event.target.value)}/>
        </form>
    )
}


export default NewTaskForm