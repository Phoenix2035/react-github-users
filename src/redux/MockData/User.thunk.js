import {
    checkRequestSuccess,
    checkError,
    userSuccess,
    reposSuccess,
    followersSuccess,
    isLoading
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
    dispatch(isLoading(true))
    const res = await axios.get(`${rootUrl}/users/${user}`)
        .catch(err => console.log(err))
    if (res) {
        dispatch(userSuccess(res.data))
        const {login, followers_url} = res.data

        await Promise.allSettled([
            axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
            axios.get(`${followers_url}?per_page=100`)
        ]).then((results) => {
            const [repos, followers] = results
            if (repos.status === "fulfilled") {
                dispatch(reposSuccess(repos.value.data))
            }

            if (followers.status === "fulfilled") {
                dispatch(followersSuccess(followers.value.data))
            }
        })

    } else {
        dispatch(checkError(true, "there is no user with that username"))
    }
    dispatch(checkRequest())
    dispatch(isLoading(false))
};



