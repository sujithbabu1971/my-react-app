import React from 'react';
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      console.log(" COMPLETE TYPE");
      return state.map((todo) => {
        if (todo.id === action.id) {
          console.log(" todo.id equals ");
          console.log(todo.id );

          return { ...todo, complete: !todo.complete };
        } else {
          console.log(" todo.id NOT equals ");
          console.log(todo.id );

          return todo;
        }
      });
    default:{
      console.log("NOT COMPLETE TYPE");
      return state;
    }
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);
