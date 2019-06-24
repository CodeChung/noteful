import React from 'react';
import Note from './Note';
import NotesContext from './NotesContext';

class NotePage extends React.Component {
  static contextType = NotesContext;
  render() {
    const notes = this.context.notes;
    const noteId = this.props.match.params.noteId;
    const note = notes.find(note => note.id === noteId);
    if (note) {
      const date = new Date(note.modified).toDateString();
      const title = note.name;
      const content = note.content;
      const id = note.id;
      return (
        <div>
          <Note date={date} title={title} content={content} id={id}/>
          <p>{content}</p>
        </div>
      )
    } else {
      return (<div/>)
    }

  }
}

export default NotePage