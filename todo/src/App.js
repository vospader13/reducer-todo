import React, { useReducer } from 'react';
import { initialState, todoReducer } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";



const App = () => {
  const [{tasks}, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (e, task) => {
    e.preventDefault();

    const newTodo= {
      task: task,
      id: Date.now(),
      completed: false
    };

    dispatch({type: "ADD_TODO", payload: newTodo});
  };

  const toggleTodo = todoId => {
    //console.log(todoId);
    dispatch({type: "COMPLETED_TODO", payload: todoId });

  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: "CLEAR_TODO"})
  };
  
  
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
        <h2>Todo List</h2>
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoList 
          todo={tasks}
          toggleTodo={toggleTodo}
          clearCompleted={clearCompleted}
      />
      </div>
    );
  
}

export default App;
