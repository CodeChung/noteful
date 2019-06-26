import React from 'react';
import Note from '../Note/Note';
import NotesContext from '../NotesContext';
import PropTypes from 'prop-types';

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
        <section className='note-page'>
          <Note date={date} title={title} content={content} id={id}/>
          <p>{content}</p>
        </section>
      )
    } else {
      return (<div/>)
    }

  }
}

NotePage.propTypes = {
  match: PropTypes.shape({params: PropTypes.shape({noteId: PropTypes.string.isRequired})})
}

export default NotePage