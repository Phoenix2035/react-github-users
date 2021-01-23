import {combineReducers} from 'redux';
import mockDataReducer from "./MockData/User.reducer";


export default combineReducers({
     mocks: mockDataReducer

})