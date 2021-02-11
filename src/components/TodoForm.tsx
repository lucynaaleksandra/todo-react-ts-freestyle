// import React, { useState } from 'react'

// const TodoForm = () => {
//   const [userInput, setUserInput] = useState("")

//   const handleChange = (e) => {
//     setUserInput(e.currentTarget.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     addTask(userInput)
//     setUserInput("")
//   }

//   return (
//     <div>
//       <input type="text" value={userInput} onChange={handleChange} />
//       <button type="submit" onSubmit={handleSubmit}>ADD</button>
//     </div>
//   )
// }