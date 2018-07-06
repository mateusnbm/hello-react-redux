//
// App.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'

import { firebase_app } from '../firebase'

import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompletedGoalList from './CompletedGoalList'


class App extends Component {

    sign_out() {

        firebase_app.auth().signOut()

    }

    render() {

        return (

            <div style={{margin: '5px'}}>

                <h3>Goal Coach</h3>
                <AddGoal />
                <hr />

                <h4>Goals</h4>
                <GoalList />
                <hr />

                <h4>Completed Goals</h4>
                <CompletedGoalList />
                <hr />

                <button
                    className='btn btn-danger'
                    onClick={() => this.sign_out()}>
                    Sign Out
                </button>

            </div>

        )

    }

}


function map_state_to_props(state) {

    return {}

}


export default connect(map_state_to_props, null) (App)
