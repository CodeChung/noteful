import React from 'react';
import Note from './Note';

class Main extends React.Component {
    render() {
        const notes = this.props.notes
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