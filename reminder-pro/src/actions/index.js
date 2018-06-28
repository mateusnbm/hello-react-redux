//
// index.js
//


import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'


export const add_reminder = (text, due_date) => {

    const action = {
        type: ADD_REMINDER,
        text: text,
        due_date: due_date
    }

    return action

}


export const delete_reminder = (id) => {

    const action = {
        type: DELETE_REMINDER,
        id: id
    }

    return action

}

export const clear_reminders = () => {

    const action = {
        type: CLEAR_REMINDERS,
    }

    return action

}
