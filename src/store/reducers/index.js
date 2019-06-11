import {combineReducers} from 'redux';

import todoReducer from './todo';
import authReducer from './auth';
import addtodoReducer from './addtodo';

const rootReducer = combineReducers({
    todo:todoReducer,
    auth:authReducer,
    addtodo:addtodoReducer
});

export default rootReducer;