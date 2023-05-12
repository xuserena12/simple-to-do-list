import React from 'react';
import { useState, useEffect } from 'react';

import './ToDoList.css';



function ToDoList() {
  const [todos,setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }); 

  const [input, setInput] = useState('');


  function addItem(todo){
    const newTodo = {
      id: todo,
      todo: todo,
      complete: false,
    };
    setTodos([...todos,newTodo]);

    setInput("");
  }

  function deleteTodo(id) {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  }



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  

  return (
    <div className="big-container">
      <h1 className="title">To Do List</h1>
      
      <input 
      placeholder="add item"
      type="text"
      value={input}
      className="input-bar"
      onChange={(e) => {
        setInput(e.target.value)}}
      />
      <button onClick={(e) => {
        e.preventDefault()
        if (input === "" || input.trim().length === 0) {
          alert('Please enter a valid item!')
        } else {
          addItem(input)
        }
      }} className="add-button">Add</button>
      <div>
        {todos.map((todo) => (
            <div className="item" key={todo.id}>
            <input type="checkbox"/>
            {todo.todo}
            <button className="remove-button" onClick={() => deleteTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;