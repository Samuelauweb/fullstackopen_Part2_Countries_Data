import React from 'react'
import Note from './components/Note'

const App = ({notes}) => {
  // const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note note={note} key={note.id}/>
          // <li key={note.id}>{note.content}</li>
        ))}
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
      </ul>
    </div>
  )
}

export default App
