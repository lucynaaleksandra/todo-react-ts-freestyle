import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export type ToDo = {
  id: number;
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  // new state variable todos
  const [todos, setTodos] = useState<ToDo[]>([])
  // console.log("App:", todos)

  const addTodoHandler = (text: string) => {
    const todo: ToDo = { id: Math.random(), text: text, complete: false }
    todos.unshift(todo)
    // console.log("addTodoHandler", todos)
    setTodos([
      ...todos,
    ])
  }

  const deleteHandler = (todoId: number) => {
    console.log("removed")
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <AddTodo onAdd={addTodoHandler} />
      <TodoList items={todos} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
