import {
    checkRequestSuccess,
    checkError,
    userSuccess,
    reposSuccess,
    followersSuccess
} from './User.action'
import axios from "axios"

const rootUrl = 'https://api.github.com'


export const checkRequest = () => dispatch => {
    axios.get(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let {rate: {remaining}} = data
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
        dispatch(userSuccess(res.data))
        const {login, followers_url} = res.data
        // Repos
        axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
            .then(res => dispatch(reposSuccess(res.data)))
        // Followers
        axios.get(`${followers_url}?per_page=100`)
            .then(res => dispatch(followersSuccess(res.data)))
    } else {
        dispatch(checkError(true, "there is no user with that username"))
    }
    dispatch(checkRequest())
};



