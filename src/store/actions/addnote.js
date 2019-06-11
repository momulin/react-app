import * as actionTypes from "./actionType";
import axios from '../../axios-todo';

export const addnote = (text)=>{
    
    return dispatch =>{
        dispatch(addstart());
        const headers = {
            'x-auth':localStorage.token
        }     
        
        axios.post('/todos',{text},{headers})
        .then(res=>{
            dispatch(addsuccess());
        }).catch(e=>{
            dispatch(addfail(e));
        });
    }
}



export const addinit =()=>{
    return {
        type:actionTypes.Add_Init
    }
};

const addstart = ()=>{
    return {
        type:actionTypes.Add_Start
    }
};

const addsuccess = ()=>{
    return {
        type:actionTypes.Add_Success
    }
};

const addfail = (error)=>{
    return {
        type:actionTypes.Add_Fail,
        error:error
    }
};
