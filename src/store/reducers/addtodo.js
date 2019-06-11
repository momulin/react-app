import * as actionType from '../actions/actionType';
import {updateObject} from '../../shared/utility';

const initialState = {
    added:false,
    ings:false
};


const addinit = (state)=>{
    return updateObject(state,{added:false})
};
const addstart = (state)=>{
    return updateObject(state,{ings:true})
};
const addsuccess = (state)=>{
    return updateObject(state,{added:true,ings:false})
};

const reducer = (state=initialState,action)=>{
    
    switch (action.type) {
        case actionType.Add_Init:
            return addinit(state);
        break;
        case actionType.Add_Start:
            return addstart(state);
        break;
        case actionType.Add_Success:
            return addsuccess(state);
        break;
        case actionType.Add_Fail:
        break;
    
        default:
        break;
    }
    return state;
}

export default reducer;