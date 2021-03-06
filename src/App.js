import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes:[
        {id: 1, noteContent: "Note 1 here !"},
        {id: 2, noteContent: "Note 2 here !"},
      ],
    }
    
  }

  addNote(note){

    this.state.notes.push(note);
  }



  render() {
    return (
      <div className="notesWrapper">
      
      <div className="notesHeader">
      
        <div className="heading"> React & Firebase To-Do List </div>          
      
      </div>
        
          <div className="notesbody">
            { 
              this.state.notes.map((note) => {
                return(

                  <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                )
                
              })
            }                  
          </div>

      <div className="notesfooter">
        <NoteForm addNote={this.addNote} />
      </div>

      </div>
         
    );
  }
}

export default App;
