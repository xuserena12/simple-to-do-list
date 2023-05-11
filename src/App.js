import React from 'react';
import './App.css';
import { useState} from "react";

export default function App() {
  const [todos,setTodos] = useState([]); // contains an array with the todos
  const [input, setInput] = useState(""); // default is going to be nothing since it's an empty initially

  // make a function to add a todo 

  function addItem(todo){
    const newTodo = {
      id: Math.random(),
      todo: todo,
      complete: false,
    };
    // this creates an object which includes the id and the todo (which is essentially the todo that was passed in!!)
    // add the todo to the list
    setTodos([...todos,newTodo]); // appends the todo to the existing elements of the list

    // clear the input box so that they know that it's been added, and so that they can add more things!!
    setInput("");
  }

  function deleteTodo(id) {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  }


  return (
    <div>
      <h1 className="title">To Do List</h1>
      <input class="search-bar" placeholder="search for item"></input>
      <input 
      placeholder="add item"
      type="text"
      value={input}
      className="input-bar"
      onChange={(e) => {
        setInput(e.target.value)}}
      />
      <button onClick={() => {
        if (input === "") {
          alert('Please enter a valid item!')
        } else {
          addItem(input)
        }
      }} className="add-button">Add</button>
      <div>
        {todos.map((todo) => (
          <div class="item" key={todo.id}>
            <input type="checkbox"/>
            {todo.todo}
            <button class="remove-button" onClick={() => deleteTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}