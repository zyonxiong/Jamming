import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
        //gives us the key to what the user types in and updates the state
    }
    
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} 
                onChange={this.handleNameChange}
                //this fires when a user types in the playlist name
                 />
                <TrackList tracks={this.props.playlistTracks} 
                            onRemove={this.props.onRemove}
                            isRemoval={true}
                            />
                <button className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;