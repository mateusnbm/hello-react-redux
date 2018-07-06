//
// reducer_goals.js
//


import { SET_GOALS } from '../constants'


export default (state = [], action) => {

    switch (action.type) {

        case SET_GOALS:

            return action.goals

        default: return state

    }

}
