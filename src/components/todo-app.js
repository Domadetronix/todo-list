import React from "react";
import Task from "./task";
import TaskList from "./task-list";
import NewTaskForm from "./new-task-form";
import TodoFooter from "./footer";

const TodoApp = () => {
    return (
        <section className="todoapp">
            <NewTaskForm></NewTaskForm>
            <section className="main">
                <TaskList></TaskList>
                <TodoFooter></TodoFooter>
            </section>
        </section>
    )
}

export default TodoApp;