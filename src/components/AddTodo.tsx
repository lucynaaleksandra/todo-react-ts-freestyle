import React, { useState, FC } from 'react'

type Props = {
  onAdd: (userInput: string) => void
}

const AddTodo: FC<Props> = ({
  onAdd,
}: Props) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e: React.FormEvent) => {
    setUserInput((e.target as HTMLInputElement).value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(userInput)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit" >ADD</button>
    </form>
  )
}

export default AddTodo