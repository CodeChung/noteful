import React from 'react';
import Note from './Note';
import NotesContext from './NotesContext';

class NotePage extends React.Component {
    static contextType = NotesContext;
    render() {
        const id = this.props.match.params.folderId;
        const notes = this.context.notes;
        const folderNotes = notes.filter(note => note.folderId === id)
            .map((note, index) => {
                const date = new Date(note.modified).toDateString();
                const title = note.name;
                const content = note.content;
                const id = note.id;
                return <Note key={index} date={date} title={title} content={content} id={id}/>
            })
        return (
            <div>
                {folderNotes}
            </div>
        )
    }
}

export default NotePage;