import types from './User.types'


import mockUser from "../../mockData.js/mockUser";
import mockRepos from "../../mockData.js/mockRepos";
import mockFollowers from "../../mockData.js/mockFollowers";


const initial_state = {
    user: mockUser,
    repos: mockRepos,
    followers: mockFollowers,
    request: 0,
    loading: true,
    error: {
        show: false,
        msg: ''
    },
};


const mockDataReducer = (state = initial_state, {type, payload}) => {
    switch (type) {
        case types.USER:
            return {...state, user: payload}
        case types.REPOS:
            return {...state, repos: payload}
        case types.FOLLOWERS:
            return {...state, followers: payload}
        case types.CHECK_REQUEST:
            return {...state, request: payload, loading: false}
        case types.GET_ERROR:
            return {...state, error: {show: payload.show, msg: payload.msg}}
        default:
            return state;
    }
};


export default mockDataReducer