//
// index.js
//


import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants'


export function log_user(email) {

    const action = {
        type: SIGNED_IN,
        email: email,
    }

    return action

}

export function set_goals(goals) {

    const action = {
        type: SET_GOALS,
        goals: goals,
    }

    return action

}

export function set_completed_goals(goals) {

    const action = {
        type: SET_COMPLETED,
        completed_goals: goals,
    }

    return action

}
