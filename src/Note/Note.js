import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotesContext from '../NotesContext';
import './Note.css'

class Note extends React.Component {
    // static contextType = NotesContext;
    handleClick(id) {
        this.context.deleteNote(id)
        Promise.resolve(true)
    }
    render() {
        console.log(this.props.history)
        const id = this.props.id;
        return (
            <div className='note'>
                <Link to={'/note/' + id}>
                    <h2>{this.props.title}</h2>
                    <div className='note-body'>
                        <p>Date modified on {this.props.date}</p>
                    </div>
                </Link>
                <div className='note-body'>
                    <button onClick={() => {
                        this.handleClick(id)
                            .then(res => this.props.history.push('/'))
                    }}>Delete Note</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Note);
Note.contextType = NotesContext;