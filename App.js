import React, { useState } from 'react'
import Note from './Components/Note'


const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('Enter...')
  const [currNoteImp, setCurrNoteImp] = useState(false)
  const [showAll, setShowAll] = useState(true)

  const appendNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const newNoteObj = {
      content: newNote,
      id: notes.length + 1,
      important: currNoteImp
    }

    setNotes(notes.concat(newNoteObj))
    setNewNote('Enter...')
  }

  const onNoteChange = (event) => {
    setNewNote(event.target.value)
    console.log(event.target.value)
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
        <h1> Notes </h1>

        <div> 
          <button onClick = {() => setShowAll(!showAll)} > 
            show {showAll ? 'important' : 'all'}
          </button>
        </div>

        <ul> 
          {notesToShow.map(note => 
            <Note key = {note.id} note={note} />
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
