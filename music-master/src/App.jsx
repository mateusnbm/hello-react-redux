//
// App.jsx
//



import React, { Component } from 'react'

import Profile from './Profile'
import Gallery from './Gallery'

import './App.css'

import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'



class App extends Component {

    constructor(props) {

        super(props)

        this.state = {
            query: '',
            artist: null,
            tracks: [],
            token: null,
        }

        // Spotify API authentication.

        const client_id = '84ad40fc98b2418cade897401e1b61c6'
        const client_secret = '9f1b3cecfcae49658c5b1a004f6ec407'
        const redirect_url = 'http://localhost:3000'

        const url = new URL(window.location.href)
        const access_code = url.searchParams.get('code')
        const access_token = url.searchParams.get('access_code')

        if (access_code !== null) {

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                }
            }

            const base_url = 'https://accounts.spotify.com/api/token?'
            const fetch_url = base_url + 'code=' + access_code + '&redirect_uri=' + redirect_url + '&grant_type=authorization_code'

            fetch(fetch_url, options).then(response => response.json()).then(json => {

                this.setState({token: json.access_token})

            })

        }else{

            const options = {method: 'GET'}
            const base_url = 'https://accounts.spotify.com/authorize?'
            const fetch_url = base_url + 'response_type=code&client_id=' + client_id + '&scope=user-read-private user-read-email&redirect_uri=' + redirect_url + '&state=aaaaaaaaaaaaaaaa'

            window.location = fetch_url

        }

    }

    search() {

        const base_url = 'https://api.spotify.com/v1/search?'
        const fetch_url = base_url + 'q=' + this.state.query + '&type=artist&limit=1'

        const token = this.state.token
        const options = {method: 'GET', headers: {authorization: 'Bearer ' + token}}

        fetch(fetch_url, options).then(response => response.json()).then(json => {

            const artist = json.artists.items[0]

            this.setState({artist: artist})

            const tracks_url = 'https://api.spotify.com/v1/artists/'
            const tracks_fetch_url = tracks_url + artist.id + '/top-tracks?country=US'

            fetch(tracks_fetch_url, options).then(response => response.json()).then(json => {

                this.setState({tracks: json.tracks})

            })

        })

    }

    render() {

        return (

            <div className='app'>

                <div className='app-title'>Music Master</div>

                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for an artist...'
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => { if (event.key === 'Enter') {this.search()} }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph='search'/>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                {
                    this.state.artist === null ?
                        <div></div> :
                        <div><Profile artist={this.state.artist}/></div>
                }

                <Gallery tracks={this.state.tracks}/>

            </div>

        )

    }

}


export default App
