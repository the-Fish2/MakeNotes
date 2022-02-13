import React from 'react'

const Note = ({note, remove}) => {
    // const label = note.important
    // ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      {/* <button onClick={toggleImportance}>{label}</button> */}
      <button onClick={remove}> Remove </button>
    </li>
  )
}

export default Note
