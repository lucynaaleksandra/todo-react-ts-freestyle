import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export type Todo = {
  id: number;
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  // new state variable todos
  const [todos, setTodos] = useState<Todo[]>([])

  // console.log("App:", todos)

  const addTodoHandler = (text: string) => {
    const todo: Todo = { id: Math.random(), text: text, complete: false }
    todos.unshift(todo)
    // console.log("addTodoHandler", todos)
    setTodos([
      ...todos,
    ])
  }

  return (
    <div className="App">
      <AddTodo onAdd={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
