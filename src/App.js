import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import NotePage from './NotePage';
import FolderList from './FolderList';
import FolderNotes from './FolderNotes';
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
  store = this.props.store
  componentDidMount() {
    const { folders, notes } = this.store;
    this.setState({
      folders,
      notes
    })
  }
  render() {
    return (
      <>
        <header className="App-header">
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <section className='sidebar'>
            <FolderList folders={this.state.folders}/>
          </section>
          <section className='main-display'>
            <Switch>
              <Route exact path='/' render={() => <Main notes={this.state.notes}/>}/>
              <Route path='/folder/:folderId' component={(props) => <FolderNotes notes={this.state.notes} match={props.match}/>}/>
              <Route path='/note/:noteId' component={(props) => <NotePage notes={this.state.notes} match={props.match}/>}/>
            </Switch>
          </section>
        </main>
      </>
    );
  }
  
}

export default App;
