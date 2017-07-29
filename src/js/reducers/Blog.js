import { SET_POSTS } from '../constants/ActionTypes'

const posts = (state = [], action = {}) => {
    switch(action.type) {
        case SET_POSTS:
            return action.payload

        default:
            return state
    }
} 


export default posts
