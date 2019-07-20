import React, { Component } from 'react';
import NewNote from "../components/NewNote";
import NotesList from '../components/NotesList';

class FormView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: 0,
            note: ''
        };
        this.addNote = this.addNote.bind(this);
        this.changeNote = this.changeNote.bind(this);
    }
    addNote() {
        window.localStorage.setItem(this.state.noteId, this.state.note);
        this.setState({
            noteId: this.state.noteId + 1
        })
    }
    changeNote(e) {
        this.setState({
            note: e.target.value
        });
    }
    render() {
        return (
            <div className='App'>
                <NewNote handleChange={this.changeNote} handleClick={this.addNote} />
                <NotesList />
            </div>
        );
    }
}

export default FormView;