import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import { useReducer } from 'react';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import { useContext } from 'react';
import TodoContext from './components/TodoContext';
// const reducer = (state, action) => {
//   const { payload } = action
//   switch (action.type) {
//     case "ADD_TODO": {
//       return {
//         todos: [payload.todo, ...state.todos]
//       }
//     }
//     case "UPDATE_TODO": {
//       const dublicateTodos = state.expenses
//       dublicateTodos[payload.todoPos] = payload.todo
//       return {
//         expenses: dublicateTodos
//       }
//     }
//   }
// }
function App() {
const{state,dispatch}=useContext(TodoContext)
   
  const [todoToUpdate, setTodoToUpdate] = useState(null)
  const addTodo = (todo) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{ dispatch({ type: "ADD_TODO", payload: json })});
   
  }
  const updateTodo = (todo) => {
    
    const todoPos = state.todos.findIndex((tod) => {
      return tod.id === todo.id
    })
  
    fetch('https://jsonplaceholder.typicode.com/posts/'+todo.id, {
  method: 'PUT',
  body: JSON.stringify(todo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {dispatch({ type: "UPDATE_TODO", payload: { todoPos, json } })});
     

  }
  const resetTodoToUpdate = () => {
    setTodoToUpdate(null)
  }
  const deleteTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  }
  return (
    <>
      <h1 className='mainHeading'>TodoList</h1>
      <div className='container'>
        <div className="row ">
          <div  className='position-fixed col-lg-3 ' >
            <TodoForm addTodo={addTodo}
              updateTodo={updateTodo}
              todoToUpdate={todoToUpdate}
              resetTodoToUpdate={resetTodoToUpdate} />
          </div>
          <div className='col-lg-9 offset-lg-4' >
            <TodoList deleteTodo={deleteTodo} changeTodoToUpdate={setTodoToUpdate} />
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
