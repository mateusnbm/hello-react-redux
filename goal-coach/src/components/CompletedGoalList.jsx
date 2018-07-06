//
// CompletedGoalList.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'

import { set_completed_goals } from '../actions'

import { firebase_db_completed } from '../firebase'


class CompletedGoalList extends Component {

    componentDidMount() {

        firebase_db_completed.on('value', snap => {

            let completed_goals = []

            snap.forEach(completed_goal => {

                completed_goals.push({
                    email: completed_goal.val().email,
                    title: completed_goal.val().title,
                })

            })

            this.props.set_completed_goals(completed_goals)

        })

    }

    clear_all() {

        firebase_db_completed.set([])

    }

    render() {

        return (

            <div>
                {
                    this.props.completed_goals.map((goal, index) => {

                        return (

                            <div key={index}>
                                <strong> {goal.title} </strong> completed by <em> {goal.email} </em>
                            </div>

                        )

                    })
                }

                <button
                    className='btn btn-primary'
                    onClick={() => this.clear_all()}
                    >
                        Clear All
                    </button>

            </div>

        )

    }

}


function map_state_to_props(state) {

    return {completed_goals: state.completed_goals}

}


export default connect(map_state_to_props, { set_completed_goals }) (CompletedGoalList)
