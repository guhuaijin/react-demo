import * as types from '../types'

const initialState = {
    list: []
}

export default function locationState(state = initialState, action) {
    switch (action.type) {
        case types.GET_LOCATION_LIST:

            console.log(action)

            return Object.assign({}, state, {
                list: action.data
            })
        default:
            return state;
    }
}
