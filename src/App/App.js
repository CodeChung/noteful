import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import NotePage from '../NotePage/NotePage';
import FolderList from '../FolderList/FolderList';
import FolderNotes from '../FolderNotes/FolderNotes';
import NotesContext from'../NotesContext';
import { Link } from 'react-router-dom';
import './App.css';
import AddFolder from '../AddFolder/AddFolder';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
    }
    this.getFolders = this.getFolders.bind(this)
    this.addFolder = this.addFolder.bind(this)
    this.getNotes = this.getNotes.bind(this)
    this.addNote = this.addNote.bind(this)
  }
  componentDidMount() {
    this.getFolders()
    this.getNotes()
  }
  deleteNote(id) {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'delete'
    })
      .then(resp => {
        console.log('id', id)
        if (!resp.ok) {
          throw new Error(resp.err)
        } else {
          return Promise.resolve(true)
        }
      })
      .catch(err => alert(err))
  }
  getNotes() {
    fetch("http://localhost:9090/notes")
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.error)
        }
        return resp.json()
      })
      .then(resp => {
        this.setState({notes: resp})
      })
      .catch(err => {
        alert(err)
      })
  }
  addNote(id, name, folderId, content) {
    const body = JSON.stringify({id, name, folderId, content})
    fetch('http://localhost:9090/notes',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: body
      }
    )
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.error)
        }
        return resp.json()
      })
      .then(resp => {
        this.getNotes();
      })
      .catch(err => {
        alert(err)
      })
  }
  getFolders() {
    fetch("http://localhost:9090/folders")
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.error)
        }
        return resp.json()
      })
      .then(resp => {
        this.setState({folders: resp})
      })
      .catch(err => {
        alert(err)
      })
  }
  addFolder = (id, name) => {
    const body = JSON.stringify({id: id, name: name})
    fetch('http://localhost:9090/folders',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: body
      }
    )
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.error)
        }
        return resp.json()
      })
      .then(resp => {
        this.getFolders();
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addNote: this.addNote,
      addFolder: this.addFolder,
    }
    return (
      <NotesContext.Provider value={contextValue}>
        <header className="App-header">
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <section className='sidebar'>
            <FolderList folders={this.state.folders}/>
          </section>
          <section className='main-display'>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/folder/:folderId' component={(props) => <FolderNotes match={props.match}/>}/>
              <Route path='/note/:noteId' component={(props) => <NotePage match={props.match}/>}/>
              <Route path='/addFolder' component={AddFolder}/>
            </Switch>
          </section>
        </main>
      </NotesContext.Provider>
    );
  }
  
}

export default App;
