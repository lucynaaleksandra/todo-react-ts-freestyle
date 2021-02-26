import React from 'react'
import { ToDo } from "../App"
import Todo from "./Todo"
import './todoList.scss'

type Props = {
  items: ToDo[]
  onDelete: (id: number) => void
  onChange: (todo: ToDo) => void
}

const TodoList = ({
  items,
  onDelete,
  onChange,
}: Props) => {
  // console.log("TodoList", items)

  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDelete={onDelete}
            onChange={onChange} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList

// style={{ textDecoration: todo.isComplete ? 'line-through' : undefined }}