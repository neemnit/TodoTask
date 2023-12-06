import React, { useRef ,useEffect} from 'react'


const TodoForm = ({todoToUpdate,addTodo,updateTodo,resetTodoToUpdate}) => {
  console.log(todoToUpdate,"nit")
  const todoTitleInput = useRef()
  const todoBodyInput = useRef()
  const todoUserIdInput=useRef()
  useEffect(()=>{
if(!todoToUpdate) return
todoTitleInput.current.value=todoToUpdate.title
todoBodyInput.current.value=todoToUpdate.body
todoUserIdInput.current.value=todoToUpdate.userId
  },[todoToUpdate])
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const todoTitle=todoTitleInput.current.value
    const todoBody=todoBodyInput.current.value
    const todoUserId=todoUserIdInput.current.value
    if(todoTitle===""){
      return
    }
    else if(todoBody===""){
      return
    }
    else if(todoUserId<=0){
      return
    }
    else if(!todoToUpdate){
      const todo={
        title:todoTitle,
        body:todoBody,
        userId:todoUserId
      }
      addTodo(todo)
      clearInput()
      return

    }
    const todo={
      title:todoTitle,
      body:todoBody,
      userId:todoUserId,
      id:todoToUpdate.id

    }
    updateTodo(todo)
  
    
    clearInput()
    resetTodoToUpdate()
  }
  const clearInput=()=>{
    todoTitleInput.current.value=""
    todoBodyInput.current.value=""
    todoUserIdInput.current.value=""
  }
  return (
    <div className='p-3 border border-2'>
      <h4 className='text-center'>
        {todoToUpdate?"Edit":"Add New "}
        Task
      </h4>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='todoTitle' className='mb-1'>Enter todo title</label>
        <input
          id="todoTitle"
          type="text"
          className='form-control'
          ref={todoTitleInput}
          required
        />
        <label htmlFor='todoBody' className='mb-1'>Enter todo description</label>
        <textarea id='todoBody' type="text" className='form-control' ref={todoBodyInput} required/>
        <label htmlFor='todoId' className='mb-1'>Enter task user id</label>
        <input type='number' id='todoId' className='form-control' ref={todoUserIdInput} required/>

      <div className='text-center mt-3'> <button className='btn btn-sm btn-primary  '>
      {todoToUpdate?"Edit":"Add  "}
        Task</button></div>
      </form>

    </div>
  )
}

export default TodoForm