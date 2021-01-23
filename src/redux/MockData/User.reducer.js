import mockUser from "../../mockData.js/mockUser";
import mockRepos from "../../mockData.js/mockRepos";
import mockFollowers from "../../mockData.js/mockFollowers";


const initial_state = {
    mockUser,
    mockRepos,
    mockFollowers
};


const mockDataReducer = (state = initial_state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default mockDataReducer