import axios from 'axios'
import { SET_PROJECTS } from '../constants/ActionTypes'

export const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        payload: projects
    }
}

export const fetchProjects = () => {
    return dispatch => {
        axios.get('/api/projects')
            .then((res) => {
                dispatch(setProjects(res.data.projects))
            })
    }
}
