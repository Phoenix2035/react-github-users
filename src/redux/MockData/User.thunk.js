import {searchUserSuccess, checkRequestSuccess} from './User.action'
import axios from "axios"

const rootUrl = 'https://api.github.com'


export const checkRequest = () => dispatch => {
    axios.get(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let {rate: {remaining}} = data
            dispatch(checkRequestSuccess(remaining))
        })
        .catch(err => console.log(err))
};


export const searchUser = () => dispatch => {

};



