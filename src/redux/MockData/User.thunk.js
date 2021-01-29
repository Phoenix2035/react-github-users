import {searchUserSuccess, checkRequestSuccess, checkError} from './User.action'
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


export const searchUser = () => dispatch => {

};



