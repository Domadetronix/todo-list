import React, {useEffect, useState} from "react";
import TaskList from "./task-list/task-list";
import NewTaskForm from "./new-task-form/new-task-form";
import TodoFooter from "./footer/footer";
import Context from "../context"

const TodoApp = () => {
    const initialTodos = [
        { id: 1, name: 'Completed task', isActive:true},
        { id: 2, name: 'Second task', isActive:true},
        {id: 3, name: 'Active task', isActive:true}
    ]
    const[todos, setTodos] = useState(initialTodos)

    const [visibleTodos, setVisibleTodos] = useState(initialTodos)

    const [selectedFilter, setSelectedFilter] = useState('all')
    
    useEffect(()=>{
        setVisibleTodos(
            todos.filter((todo)=>{
                if (selectedFilter == 'active') return todo.isActive
                if (selectedFilter == 'completed') return !todo.isActive
                return true
            })
        )
    }, [selectedFilter, todos])

    function conditionChange(id){
        setTodos(todos.map((todo)=>{
            if (todo.id == id) {
                todo.isActive = !todo.isActive
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
            id: Date.now().valueOf(), 
            condition: 'default',
            isActive: true
        }]))
    }

    function countLeftTasks(){
        return todos.reduce((counter = 0, todo)=>{
            if(todo.isActive) counter++;
            return counter    
        }, 0)
    }

    function clearCompleted(){
        console.log(todos.filter(todo => todo.isActive))
        setTodos(todos.filter(todo => todo.isActive))
    }


    return (
        <Context.Provider value = {{removeTodo, conditionChange, editConditionChange, renameTodo, countLeftTasks, clearCompleted, selectedFilter, setSelectedFilter}}>
            <section className="todoapp">
                <NewTaskForm onCreate = {addTodo}></NewTaskForm>
                <section className="main">
                    <TaskList todos = {visibleTodos} />
                    <TodoFooter/>
                </section>
            </section>
        </Context.Provider>
    )
}

export default TodoApp;