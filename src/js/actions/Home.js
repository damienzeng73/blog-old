import axios from 'axios'

export const sendEmail = (data) => {
    return dispatch => {
        return axios.post('/api/sendEmail', {
            name: data.name,
            email: data.email,
            message: data.message
        })
    }
}
