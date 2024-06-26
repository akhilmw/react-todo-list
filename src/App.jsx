import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  
  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')


  const persistData = (newTodoList) => {
    localStorage.setItem('todos', JSON.stringify({todos : newTodoList}))
  }

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    
  }

  const handleEditTodo = (index) => {
    
    const valueToBeEdited = todos[index]
    handleDeleteTodo(index)
    setTodoValue(valueToBeEdited)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIdx) => {return todoIdx != index})
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(() => {

    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)


  }, [])

  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue}  handleAddTodo = {handleAddTodo}/>
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos}/>
    </>
  )
}

export default App
