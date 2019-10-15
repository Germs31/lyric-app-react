import React, { Component } from 'react'
import {Consumer} from '../../context'
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
                        return <h1>tracks loaded</h1>
                    }

                }}
            </Consumer>
        )
    }
}

export default Tracks;