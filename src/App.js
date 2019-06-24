import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import NotePage from './NotePage';
import FolderList from './FolderList';
import FolderNotes from './FolderNotes';
import NotesContext from'./NotesContext';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
    }
  }
  componentDidMount() {
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
  deleteNote(id) {
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'delete'
    })
      .then(resp => {
        console.log('id', id)
        if (!resp.ok) {
          throw new Error(resp.err)
        } else {
          return true;
        }
      })
      .catch(err => alert(err))
  }
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
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
            </Switch>
          </section>
        </main>
      </NotesContext.Provider>
    );
  }
  
}

export default App;
