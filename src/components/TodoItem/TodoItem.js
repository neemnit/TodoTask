import React from 'react'
import DeleteImage from "../../images/trash-bin.png"
import { useContext } from 'react'
import TodoContext from '../TodoContext'
const TodoItem = ({todo,deleteTodo,changeTodoToUpdate}) => {

    const {state,dispatch}=useContext(TodoContext)
  return (
    <>
    <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo.body}</td>
        <td>
            <div className='p-3' onClick={()=>deleteTodo(todo.id)}>
            <i class="fa-solid fa-trash" style={{color:"#b40000"}}></i>
            </div>
        </td>
        <td>
            <div className='p-3' onClick={()=>changeTodoToUpdate(todo)} >
            <i class="fa-solid fa-edit" style={{color:"blue"}}></i>
            </div>
        </td>

    </tr>
    </>
  )
}

export default TodoItem