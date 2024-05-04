import React, {useContext} from "react";
import TaskList from "./task-list/task-list";
import NewTaskForm from "./new-task-form/new-task-form";
import TodoFooter from "./footer/footer";
import Context from "../context"

const TodoApp = () => {

    const[todos, setTodos] = React.useState([
        { id: 1, name: 'Completed task', condition:'', completed: true, isEditing:false},
        { id: 2, name: 'Second task', condition:'', completed: false, isEditing:false },
        {id: 3, name: 'Active task', condition:'', completed: false, isEditing:false }
    ])

    function conditionChange(id){
        setTodos(todos.map((todo)=>{
            if (todo.id == id) {
                todo.completed = !todo.completed
            }
            return todo
        })) 
    }
    
    function editConditionChange(id){
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                todo.isEditing = !todo.isEditing
            }
            console.log(`todo id ${id} is isEditing`);
        return todo
        }))
    }

    function renameTodo(id, value){
        setTodos(todos.map((todo)=>{
            if(todo.id == id) todo.name = value 
            todo.isEditing = false
            return todo
        }))
    }

    function removeTodo (id){
        console.log("Bye Bye");
        setTodos(todos.filter( todo => todo.id!==id ))
    }

    function addTodo(name){
        setTodos(todos.concat([{
            name,
            id: Date.now(), 
            condition: 'default',
            completed: false
        }]))
    }



    return (
        <Context.Provider value = {{removeTodo}}>
            <section className="todoapp">
                <NewTaskForm onCreate = {addTodo}></NewTaskForm>
                <section className="main">
                    <TaskList todos = {todos} conditionChange = {conditionChange} editConditionChange = {editConditionChange} renameTodo = {renameTodo}/>
                    <TodoFooter/>
                </section>
            </section>
        </Context.Provider>
    )
}

export default TodoApp;