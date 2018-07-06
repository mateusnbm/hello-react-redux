//
// AddGoal.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'

import { firebase_db_goals } from '../firebase'


class AddGoal extends Component {

    constructor(props) {

        super(props)

        this.state = { title: '' }

    }

    create_goal() {

        firebase_db_goals.push({
            email: this.props.user.email,
            title: this.state.title,
        })

    }

    render() {

        return (

            <div className='form-inline'>

                <div className='form-group'>

                    <input
                        className='form-control'
                        type='text'
                        style={{marginRight: '5px'}}
                        placeholder='Add a goal...'
                        onChange={event => this.setState({title: event.target.value})}
                        />

                    <button
                        className='btn btn-success'
                        type='button'
                        onClick={() => this.create_goal()}
                        >
                            Submit
                        </button>

                </div>

            </div>

        )

    }

}


function map_state_to_props(state) {

    return { user: state.user }

}


export default connect(map_state_to_props, null) (AddGoal)
