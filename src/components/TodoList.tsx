import React from 'react'
import { Todo } from "../App"

type Props = {
  items: Todo[]
}

const TodoList = ({
  items,
}: Props) => {
  console.log("TodoList", items)
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
            <input type='checkbox' />{todo.text}
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TodoList