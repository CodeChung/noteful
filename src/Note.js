import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotesContext from './NotesContext';
import './Note.css'

class Note extends React.Component {
    // static contextType = NotesContext;
    handleClick(id) {
        this.context.deleteNote(id)
            .then(resp => {
                if (resp) {
                    this.props.history.push('/')
                }
            }
        )
    }
    render() {
        const id = this.props.id;
        return (
            <div className='note'>
                <Link to={'/note/' + id}>
                    <h2>{this.props.title}</h2>
                    <div className='note-body'>
                        <p>Date modified on {this.props.date}</p>
                        <button onClick={() => {
                            this.props.history.push('/')
                            }}>Delete Note</button>
                    </div>
                </Link>
                
            </div>
        )
    }
}

export default withRouter(Note);
Note.contextType = NotesContext;