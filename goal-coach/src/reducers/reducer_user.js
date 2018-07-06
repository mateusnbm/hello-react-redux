//
// index.js
//


import { SIGNED_IN } from '../constants'


let user = { email: null }


export default (state = user, action) => {

    switch (action.type) {

        case SIGNED_IN:

            user = { email: action.email }

            return user

        default: return state

    }

}
