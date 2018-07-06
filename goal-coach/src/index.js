//
// index.js
//


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import {createStore } from 'redux'
import { Provider } from 'react-redux'

import { firebase_app } from './firebase'
import {log_user } from './actions'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import reducer from './reducers'


const store = createStore(reducer)


firebase_app.auth().onAuthStateChanged(user => {

    if (user) {

        console.log('user has signed in or up...', user)

        store.dispatch(log_user(user.email))

    }else{

        console.log('the user has signed out or still needs to sign in...')

    }

})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/app' component={App}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
