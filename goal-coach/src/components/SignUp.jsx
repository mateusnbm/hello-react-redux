//
// SignUp.jsx
//


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { firebase_app } from '../firebase'


class SignUp extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }

    }

    sign_up() {

        const { email, password } = this.state

        firebase_app.auth().createUserWithEmailAndPassword(email, password).catch(error => {

            this.setState({error: error})

        })

    }

    render() {

        return (

            <div className='form-inline' style={{margin: '5%'}}>

                <h2>Sign Up</h2>

                <div className='form-group'>

                    <input
                        className='form-control'
                        type='text'
                        style={{marginRight: '5px'}}
                        placeholder='email'
                        onChange={event => this.setState({email: event.target.value})}
                        />

                    <input
                        className='form-control'
                        type='password'
                        style={{marginRight: '5px'}}
                        placeholder='password'
                        onChange={event => this.setState({password: event.target.value})}
                        />

                    <button
                        className='btn btn-primary'
                        type='button'
                        onClick={() => this.sign_up()}>
                            Sign Up
                        </button>

                </div>

                <div>{this.state.error.message}</div>

                <div>
                    <Link to={'/signin'}>Already an user? Sign In Instead</Link>
                </div>

            </div>

        )

    }

}


export default SignUp
