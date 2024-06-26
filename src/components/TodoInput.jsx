import React, { useState } from 'react'

const TodoInput = (props) => {

    const {handleAddTodo, todoValue, setTodoValue} = props

    

    const handleChange = (event) => {
        setTodoValue(event.target.value)
    }

  return (
    <header>
      <input value={todoValue} onChange={handleChange} placeholder='Enter Todo...' type="text" />
      <button onClick={() => {
        handleAddTodo(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput
