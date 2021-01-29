import types from './User.types';


export const searchUserSuccess = (data) => {
    return {
        type: types.SEARCH_USER,
        payload: data
    }
};

export const checkRequestSuccess = (data) => {
    return {
        type: types.CHECK_REQUEST,
        payload: data
    }
};

export const checkError = (show = false, msg) => {
    return {
        type: types.GET_ERROR,
        payload: {show, msg}
    }
};