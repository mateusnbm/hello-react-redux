//
// reducer_completed_goals.js
//


import { SET_COMPLETED } from '../constants'


export default (state = [], action) => {

    switch (action.type) {

        case SET_COMPLETED:

            return action.completed_goals

        default: return state

    }

}
