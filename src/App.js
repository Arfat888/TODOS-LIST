import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./mycomps/Header";
import Todos from "./mycomps/Todos";
import Footer from "./mycomps/Footer";
import Adding from "./mycomps/Adding";
import About from "./mycomps/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Initializing todos state from localStorage
  const init = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

  const [todos, setTodos] = useState(init);

  // Sync todos state with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete a todo
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.sno !== todo.sno));
  };

  // Function to add a new todo
  const addtodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Header title="MY TODOS LIST" searchBar={true} />
      <Routes>
        <Route path="/" element={
          <>
            <Adding addtodo={addtodo} />
            <Todos todos={todos} onDelete={deleteTodo} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
