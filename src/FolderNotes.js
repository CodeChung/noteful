import React from 'react';
import Note from './Note';

class NotePage extends React.Component {
    render() {
        const id = this.props.match.params.folderId;
        const notes = this.props.notes;
        const folderNotes = notes.filter(note => note.folderId === id)
            .map((note, index) => {
                const date = new Date(note.modified).toDateString();
                const title = note.name;
                const content = note.content;
                const id = note.id;
                return <Note key={index} date={date} title={title} content={content} id={id}/>
            })
        console.log(folderNotes)
        return (
            <div>
                {folderNotes}
            </div>
        )
    }
}

export default NotePage;