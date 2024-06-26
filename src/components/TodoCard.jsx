import React from 'react'

const TodoCard = (props) => {
    const {children, handleDeleteTodo, handleEditTodo, idx} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(idx)}><i className="fa-regular fa-pen-to-square"></i></button>
                <button onClick={() => handleDeleteTodo(idx)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}

export default TodoCard
