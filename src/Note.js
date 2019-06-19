import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css'

class Note extends React.Component {
    render() {
        return (
            <div className='note'>
                <Link to={'/note/' + this.props.id}>
                    <h2>{this.props.title}</h2>
                    <div className='note-body'>
                        <p>Date modified on {this.props.date}</p>
                        <button>Delete Note</button>
                    </div>
                </Link>
                
            </div>
        )
    }
}

export default Note;