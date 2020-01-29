import {combineReducers} from "redux"
import plotReducer from './plot-reducer'
import userReducer from "./user-reducer";

const reducers = combineReducers({
    plotState: plotReducer,
    userState: userReducer

});

export default reducers;