import types from './User.types';


export const userSuccess = (user) => {
    return {
        type: types.USER,
        payload: user
    }
};

export const reposSuccess = (repo) => {
    return {
        type: types.REPOS,
        payload: repo
    }
};

export const followersSuccess = (follower) => {
    return {
        type: types.FOLLOWERS,
        payload: follower
    }
};


export const searchGithubUserSuccess = (user) => {
    return {
        type: types.SEARCH_USER,
        payload: user
    }
};


export const checkRequestSuccess = (data) => {
    return {
        type: types.CHECK_REQUEST,
        payload: data
    }
};

export const checkError = (show = false, msg = "") => {
    return {
        type: types.GET_ERROR,
        payload: {show, msg}
    }
};

