import React from 'react'
import { useState } from 'react';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const addTodo = () => {
      const todoObj = {
        todo: todo,
        isActive: 0,
      };
      setTodos((prev) => {
        return [...prev, todoObj];
      });
      console.log(todos);
    };
    return (
      <div className="App">
        <h1>Todo list</h1>
        <input type="text" onChange={(e) => setTodo(e?.target?.value)} />
        <button onClick={addTodo}>Add todo</button>
        <h1>Todod:</h1>
        {todos.map((item, index) => {
          return (
            <>
              <div>
                <p>{item?.todo}</p>
                Active<input type="checkbox" />
                Completed<input type="checkbox" />
              </div>
            </>
          );
        })}
      </div>
    );
}

export default Todo;