import React from 'react';
import uuidv1 from 'uuid/v1';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: '',
            formValid: false
        }
    };
    handleSubmit(e) {
        e.preventDefault()
    }
    updateName(name) {
        this.setState({name: name})
    }
    render() {
        return (
            <form onSubmit={}>
                <label htmlFor='note-name'>Name</label>
                <input type='text' id='note-name' name='note-name' onChange={() => this.updateName}/>
            </form>
        )
    };
}