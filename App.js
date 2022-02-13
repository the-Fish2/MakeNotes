import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import Note from './Components/Note'
import noteService from './Services/notes'
import axios from 'axios'


const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('Enter...')
  const [currNoteImp, setCurrNoteImp] = useState(false)
  const [showAll, setShowAll] = useState(true)


  const hook = () => {
    noteService
    .getAll()
    .then(initNotes => {
      setNotes(initNotes)
    })
  }

  // const toggleImportanceOf = id => {
  //   const url = `http://localhost:3001/notes/${id}`
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = { ...note, important: !note.important }
  
  //   axios.put(url, changedNote).then(response => {
  //     setNotes(notes.map(note => note.id !== id ? note : response.data))
  //   })
  // }

  const removeNote = (id) => {
      setNotes(notes.filter(note => note.id !== id))

      noteService
      .update(id)
  }
 
  useEffect(hook, [])

  const appendNote = (event) => {
    event.preventDefault()
    setCurrNoteImp(false)

    const newNoteObj = {
      content: newNote,
      id: notes.length + 1,
      important: currNoteImp
    }

    
    noteService
      .create(newNoteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('Enter...')
      })
      .catch(error => {
        alert('there appears to be a problem! Restart and try again')
      })

  }

  const onNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const changeImp = (event) => {
    event.preventDefault();
    setCurrNoteImp(!currNoteImp)
    
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter(note => note.important)

  return (
    <div> 
        <title> Notes </title>
        <h1> Notes </h1>

        <div> 
          <button onClick = {() => setShowAll(!showAll)} > 
            show {showAll ? 'important' : 'all'}
          </button>
        </div>

        <ul> 
          {notesToShow.map(note => 
            <Note 
              key = {note.id} 
              note={note}
              // toggleImportance = {() => toggleImportanceOf(note.id)}
              remove={() => removeNote(note.id)}
           />
          )}
        </ul>

        <form onSubmit = {appendNote}>

          <input 
            value={newNote}
            onChange = {onNoteChange}
          /> 

          <button type="submit"> Submit! </button>

            <div> 
              <button onClick = {changeImp}> 
                Set as {!currNoteImp ? 'important' : 'not important'}
              </button>
            </div>
          

        </form> 

    </div> 
  )
}

export default App;
