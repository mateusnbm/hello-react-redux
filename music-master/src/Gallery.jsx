//
// Gallery.jsx
//



import React, {Component} from 'react'

import './App.css'



class Gallery extends Component {

    constructor (props) {

        super(props)

        this.state = {is_playing: false, playing_url: '', audio: null}

    }

    play_audio(preview_url) {

        let audio = new Audio(preview_url)

        if (this.state.is_playing === false) {

            audio.play()
            this.setState({is_playing: true, playing_url: preview_url, audio: audio})

        }else if (this.state.playing_url === preview_url) {

            this.state.audio.pause()
            this.setState({is_playing:false})

        }else{

            this.state.audio.pause()
            audio.play()
            this.setState({is_playing: true, playing_url: preview_url, audio: audio})

        }

    }

    render() {

        const tracks = this.props.tracks

        return(

            <div>
                {
                    tracks.map((track, k) => {

                        const track_image = track.album.images[0].url

                        return (

                            <div
                                key={k}
                                className='track'
                                onClick={() => this.play_audio(track.preview_url)}
                            >

                                <img
                                    alt='track'
                                    className='track-image'
                                    src={track_image}
                                />

                                <div className='track-play'>
                                    <div className='track-play-inner'>
                                        {
                                            this.state.playing_url === track.preview_url ?
                                            <span>||</span> :
                                            <span>&#9654;</span>
                                        }
                                    </div>
                                </div>

                                <p className='track-text'>{track.name}</p>

                            </div>

                        )

                    })
                }
            </div>

        )

    }

}

export default Gallery
