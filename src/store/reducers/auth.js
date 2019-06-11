import * as actionType from '../actions/actionType';
import {updateObject} from '../../shared/utility';

const initialState ={
    token:localStorage.getItem('token'),
    failmessage:''
}

const updateToken = (state,action)=>{
    return updateObject(state,{token:action.token});
}
const authfail= (state,action)=>{
    return updateObject(state,{failmessage:action.error});
}



const reducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case actionType.AUTH_SUCCESS:
            return updateToken(state,action); 
            break;
        case actionType.AUTH_FAIL:
            return authfail(state,action); 
            break;
        case actionType.Logout:
            return {...state,token:null};
            break;
        case actionType.Register_Success:
            return updateToken(state,action); 
            break;
        case actionType.Register_Fail:
            return authfail(state,action);
            break;
        case actionType.FailMessageInit:
            return {...state,failmessage:''}; 
            break;
        default:
            break;
    }
    return state;
};
export default reducer;

