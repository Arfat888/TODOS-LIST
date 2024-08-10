import React from 'react';
import Todositem from "./Todositem";

const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    backgroundColor: "#f8f9fa" 
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h5 className="my-3">TO-DOS LIST</h5>
      {props.todos.length === 0 ? "No Todos to display" : 
        props.todos.map((todo) => (
          <Todositem key={todo.sno} todo={todo} onDelete={props.onDelete} />
        ))
      }
    </div>
  );
}


export default Todos;
