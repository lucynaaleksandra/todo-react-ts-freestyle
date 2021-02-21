import React, { useState, FC } from 'react'
import "./addTodo.scss"

type Props = {
  onAdd: (userInput: string) => void
}

const AddTodo: FC<Props> = ({
  onAdd,
}: Props) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e: React.FormEvent) => {
    if ((e.target as HTMLInputElement).value) {
      setUserInput((e.target as HTMLInputElement).value)
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(userInput)
    setUserInput("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button type="submit">ADD</button>
    </form>
  )
}

export default AddTodo
