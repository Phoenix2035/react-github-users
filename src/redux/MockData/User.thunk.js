import { searchGithubUserSuccess, checkRequestSuccess, checkError, isLoading } from './User.action'
import axios from "axios"

const rootUrl = 'https://api.github.com'


export const checkRequest = () => dispatch => {
    axios.get(`${rootUrl}/rate_limit`)
        .then(({ data }) => {
            let { rate: { remaining } } = data
            if (remaining === 0) {
                dispatch(checkError(true, "sorry, you have exceeded your hourly rate limit!"))
            }
            dispatch(checkRequestSuccess(remaining))
        })
        .catch(err => console.log(err))
};


export const searchGithubUser = user => async dispatch => {
    dispatch(checkError())
    const res = await axios.get(`${rootUrl}/users/${user}`)
        .catch(err => console.log(err))
    if (res) {
        dispatch(searchGithubUserSuccess(res.data))
    } else {
        dispatch(checkError(true, "there is no user with that username"))
    }
    dispatch(checkRequestSuccess())
};



