import axios from 'axios'
import { SET_POSTS } from '../constants/ActionTypes'

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('/api/posts')
            .then((res) => {
                dispatch(setPosts(res.data.posts))
            })
    }
}
