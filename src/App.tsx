import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

export type ToDo = {
  id: number;
  text: string;
  isComplete: boolean;
}

const App: React.FC = () => {
  // new state variable todos
  const [todos, setTodos] = useState<ToDo[]>([{
    id: 123,
    text: "ASDF",
    isComplete: false,
  }])
  // console.log("App:", todos)

  const addTodoHandler = (text: string) => {
    const todo: ToDo = { id: Math.random(), text: text, isComplete: false }
    todos.unshift(todo)
    // console.log("addTodoHandler", todos)
    setTodos([
      ...todos,
    ])
  }

  const deleteHandler = (todoId: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  const handleTodoCompleted = (todo: ToDo) => {
    console.log("checkbox checked", todo)
    // matches old id with new id
    // const oldTodo = todos.find(oldTodo => oldTodo.id === todo.id)
    const newTodos = todos.map(oldTodo => {
      if (oldTodo.id === todo.id) {
        return todo
      }
      return oldTodo
    })
    console.log("newTodos: ", newTodos)
    setTodos([
      ...newTodos,
    ])
  }

  return (
    <div className="App">
      <AddTodo onAdd={addTodoHandler} />
      <TodoList items={todos} onDelete={deleteHandler} onChange={handleTodoCompleted} />
    </div>
  );
}

export default App;
