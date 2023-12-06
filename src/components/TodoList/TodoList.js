import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import TodoContext from '../TodoContext'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({deleteTodo,changeTodoToUpdate}) => {
  const{state,dispatch}=useContext(TodoContext)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => dispatch({type:"GET_TASKS",payload:json}));
    },[dispatch])
  return (
    <div>
      <table className='table table-bordered '>
        <tbody>
        {
          state.todos.map((todo)=>{
            return(
              <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              changeTodoToUpdate={changeTodoToUpdate}/>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList