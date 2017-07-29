import { combineReducers } from 'redux'

import posts from './Blog'
import projects from './Projects'

const RootReducer = combineReducers({
    posts,
    projects
})


export default RootReducer
