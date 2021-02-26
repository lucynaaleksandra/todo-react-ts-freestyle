import React, { useState, FC } from 'react'
import "./addTodo.scss"

type Props = {
  onAdd: (userInput: string) => void
}

const AddTodo: FC<Props> = ({
  onAdd,
}) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e: React.FormEvent) => {
    setUserInput((e.target as HTMLInputElement).value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(userInput)
    setUserInput("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange} />
      <button type="submit">ADD</button>
    </form>
  )
}

export default AddTodo
