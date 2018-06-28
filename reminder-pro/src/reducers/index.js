//
// index.js
//


import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'

import { bake_cookie, read_cookie } from 'sfcookies'


const reminder = (action) => {

    return {
        id: Math.random(),
        text: action.text,
        due_date: action.due_date,
    }

}


const remove_reminder = (state=[], reminder_id) => {

    return state.filter(reminder => reminder.id !== reminder_id)

}


const reminders = (state = [], action) => {

    let reminders = null

    state = read_cookie('reminders')

    switch (action.type) {

        case ADD_REMINDER:

            reminders = [...state, reminder(action)]

            bake_cookie('reminders', reminders)

            return reminders

        case DELETE_REMINDER:

            reminders = remove_reminder(state, action.id)

            bake_cookie('reminders', reminders)

            return reminders

        case CLEAR_REMINDERS:

            bake_cookie('reminders', [])

            return []

        default:

            return state

    }

}


export default reminders
