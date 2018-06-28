//
// App.jsx
//


import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add_reminder, delete_reminder, clear_reminders } from '../actions'

import moment from 'moment'


class App extends Component {

    constructor(props) {

        super(props)

        this.state = {text: '', due_date: ''}

    }

    add_reminder() {

        this.props.add_reminder(this.state.text, this.state.due_date)

    }

    delete_reminder(id) {

        this.props.delete_reminder(id)

    }

    render_reminders() {

        const reminders = this.props.reminders

        return (

            <ul className='list-group col-sm-4'>
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className='list-group-item'>

                                <div className='list-item'>
                                    <div>{reminder.text}</div>
                                    <div>{moment(new Date(reminder.due_date)).fromNow()}</div>
                                </div>

                                <div
                                    className='list-item delete-button'
                                    onClick={() => this.delete_reminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>

                            </li>
                        )
                    })
                }
            </ul>

        )

    }

    render() {

        return (

            <div className='app'>

                <div className='app-title'>Reminder Pro</div>

                <div className='form-inline reminder-form'>

                    <div className='form-group'>
                        <input
                            className='form-control'
                            placeholder='I have to...'
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input
                            className='form-control'
                            type='datetime-local'
                            onChange={event => this.setState({due_date: event.target.value})}
                        />
                    </div>

                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => this.add_reminder()}
                    >
                        Add Reminder
                    </button>

                </div>

                { this.render_reminders() }

                <div
                    className='btn btn-danger'
                    onClick={() => this.props.clear_reminders()}
                >
                    Clear Reminders
                </div>

            </div>

        )

    }

}


function map_state_to_props(state) {

    return {reminders: state}

}


function map_dispatch_to_props(dispatch) {

    return bindActionCreators({ add_reminder, delete_reminder, clear_reminders }, dispatch)

}


export default connect(map_state_to_props, map_dispatch_to_props) (App)
