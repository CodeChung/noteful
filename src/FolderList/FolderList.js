import React from 'react';
import { Link } from 'react-router-dom';
import Folder from '../Folder/Folder';

class FolderList extends React.Component {
    render() {
        const folders = this.props.folders
                .map((folder, index) => {
                    const name = folder.name;
                    const id = folder.id;
                    return <Folder key={index} name={name} id={id}/>
                })
        return (
            <div className='folder-list'>
                {folders}
                <Link to='/addFolder'><button>Add Folder</button></Link>
            </div>
        )
    }
}

export default FolderList;