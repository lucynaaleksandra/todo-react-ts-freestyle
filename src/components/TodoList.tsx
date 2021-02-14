import React from 'react'
import { ToDo } from "../App"
import './todoList.scss'

type Props = {
  items: ToDo[],
  onDelete: (id: number) => void
}

const TodoList: React.FC<Props> = ({
  items,
  onDelete
}: Props) => {
  // console.log("TodoList", items)
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          {/* <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}> */}
          <input type='checkbox' />
          <span>{todo.text}</span>
          {/* </label> */}
          <button onClick={onDelete.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList