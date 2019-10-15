import React, { Component } from 'react'
import {Consumer} from '../../context'
import Track from '../tracks/Track'
import Spinner from '../layout/Spiner'

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value , '<-- from tracks')
                    if( value.tracks_list === undefined || value.tracks_list.length === 0){
                        return <Spinner />
                    }else{
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{value.heading}</h3>
                                <div className="row">
                                    {value.tracks_list.map(item => (
                                        <Track key={item.track.track_id} track={item.track}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }

                }}
            </Consumer>
        )
    }
}

export default Tracks;