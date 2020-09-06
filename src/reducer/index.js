import {combineReducers} from "redux";
import postReducer from "./postReducer";
import getUsers from "./getUsers";

export default combineReducers({
    post:postReducer,
    users:getUsers
});

