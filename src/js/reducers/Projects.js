import { SET_PROJECTS } from '../constants/ActionTypes'

const projects = (state = [], action = {}) => {
    switch(action.type) {
        case SET_PROJECTS:
            return action.payload

        default:
            return state
    }
}


export default projects
