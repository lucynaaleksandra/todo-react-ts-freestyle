import React from 'react'
import { ToDo } from "../App"
import './todo.scss'

type Props = {
  todo: ToDo
  onDelete: (id: number) => void
  onChange: (todo: ToDo) => void
}

const Todo: React.FC<Props> = ({
  todo,
  onDelete,
  onChange,
}) => {

  const {
    id,
    text,
    isComplete,
  } = todo

  const handleCompleteTodo = (e: React.ChangeEvent) => {
    onChange({
      ...todo,
      isComplete: !isComplete,
    })
  }

  return (
    <div className="new-todo-container">
      <label className="container" >
        <input type='checkbox'
          checked={isComplete}
          onChange={handleCompleteTodo} />
        <span className="checkmark" ></span>
        <span className={isComplete ? "strike" : ""}>{text}</span>
      </label >
      <button
        className="delete-btn"
        onClick={onDelete.bind(null, id)}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div >
  )
}

export default Todo