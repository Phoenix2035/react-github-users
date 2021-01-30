import types from './User.types';


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
        payload: { show, msg }
    }
};