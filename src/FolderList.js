import React from 'react';
import Folder from './Folder';

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
                <button>Add Folder</button>
            </div>
        )
    }
}

export default FolderList;