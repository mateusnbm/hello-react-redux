//
// GoalItem.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'

import { firebase_db_goals, firebase_db_completed } from '../firebase'


class GoalItem extends Component {

    complete_goal() {

        const email = this.props.user.email
        const goal_id = this.props.goal.goal_id
        const goal_title = this.props.goal.title

        firebase_db_goals.child(goal_id).remove()

        firebase_db_completed.push({ email: email, title: goal_title })

    }

    render() {

        const email = this.props.goal.email
        const title = this.props.goal.title

        return (

            <div style={{margin: '5px'}}>

                <strong> {title} </strong>
                <span style={{marginRight: '5px'}}> submitted by <em> {email} </em> </span>

                <button
                    className='btn btn-sm btn-primary'
                    onClick={() => this.complete_goal()}
                    >
                        Complete
                    </button>

            </div>

        )

    }

}

function map_state_to_props(state) {

    return {user: state.user}

}


export default connect(map_state_to_props, null) (GoalItem)
