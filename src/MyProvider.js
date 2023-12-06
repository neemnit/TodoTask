import React from "react";
import TodoContext from "./components/TodoContext";
import { useReducer } from "react";
const reducer = (state, action) => {
    const { payload } = action
console.log(payload)
    switch (action.type) {
      case "ADD_TODO": {
        return {
          todos: [payload, ...state.todos]
        }
      }
      case "GET_TASKS":{
        return{
            todos:payload
        }
      }
      case "UPDATE_TODO": {
        const dublicateTodos = state.todos
        dublicateTodos[payload.todoPos] = payload.json
        return {
          todos: dublicateTodos
        }
      }
      case "REMOVE_TODO":{
           const filterTodos=state.todos.filter((todo)=>{
            return todo.id!==payload.id
           })
           return{
            todos:filterTodos
           }
      }
    }
  }

const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,{ todos: [] });
  
    return (
      <TodoContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoContext.Provider>
    );
  };
  
  export default MyProvider;