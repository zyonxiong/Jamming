import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {

    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track = {track} 
                                        key={track.id} 
                                        onAdd={this.props.onAdd} 
                                        onRemove= {this.props.onRemove}
                                        isRemoval={this.props.isRemoval} />
                })
        }
            {/* this line of code -> map returns an array with the track
            information that has the album ,artist, id, etc {track} object but
            this is from our hard coded not what state is passing down dynamically*/}

        </div> 
        )
    }
}

export default TrackList;