//
// GoalList.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'

import { firebase_db_goals } from '../firebase'

import { set_goals } from '../actions'

import GoalItem from './GoalItem'


class GoalList extends Component {

    componentDidMount() {

        firebase_db_goals.on('value', snap => {

            let goals = []

            snap.forEach(goal => {

                goals.push({
                    goal_id: goal.key,
                    email: goal.val().email,
                    title: goal.val().title,
                })

            })

            this.props.set_goals(goals)

        })

    }

    render() {

        return (

            <div>
                {
                    this.props.goals.map((goal, index) => {

                        return <GoalItem key={index} goal={goal} />

                    })
                }
            </div>

        )

    }

}


function map_state_to_props(state) {

    return { goals: state.goals }

}


export default connect(map_state_to_props, { set_goals }) (GoalList)
