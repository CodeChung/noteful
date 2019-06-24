import React from 'react';
import Note from './Note';
import NotesContext from './NotesContext';

class Main extends React.Component {
    static contextType = NotesContext;
    render() {
        const notes = this.context.notes
            .map((note, index) => {
                const date = new Date(note.modified).toDateString();
                const title = note.name;
                const content = note.content;
                const id = note.id;
                return <Note key={index} date={date} title={title} content={content} id={id}/>
            })
        return (
            <div>
                {notes}
            </div>
        )
    }
}

export default Main;