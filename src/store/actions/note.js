import * as actionTypes from "./actionType";
import axios from '../../axios-todo';

const listnotesstart = (notes)=>{    
    return {type:actionTypes.listNote_Start,notes:notes};
}

const listnotesuccess = (notes)=>{    
    return {type:actionTypes.listNote_Success,notes:notes};
}

export const listnote = ()=>{
    return dispatch =>{
        const headers = {
            'x-auth':localStorage.token
        }

        dispatch(listnotesstart());
        axios.get('/todos',{headers})
        .then((res)=>{
            dispatch(listnotesuccess(res.data.todos))
        }).catch((e)=>{
            console.log('loadnote error');  
        });
    }
};

const deletesuccess = (id)=>{
    return {type:actionTypes.Delete_Success,id:id};
};

const deletefail = (error)=>{
    return {type:actionTypes.Delete_Fail,error:error};
};

export const deletenote = (id) =>{
    const headers = {
        'x-auth':localStorage.token
    }
        return dispatch =>{
        axios.delete('/todos/'+id,{headers})
        .then(res=>{
            dispatch(deletesuccess(res.data.todo._id));
        }).catch(e=>{
            dispatch(deletefail(e));
        })
        };
};

const completedsuccess =(id,completed)=>{
    return {type:actionTypes.Complete_Success,id,completed}
}
const completedfail=(error)=>{
    return {type:actionTypes.Complete_Fail,error}
}

export const completenote = (id,completed)=>{
    const headers = {
        'x-auth':localStorage.token
    }
    return dispatch =>{
        const data = {
            completed:!completed
        }
        axios.patch('/todos/'+id,data,{headers})
        .then(res=>{
            dispatch(completedsuccess(id,!completed));
        }).catch(e=>{
            dispatch(completedfail(e));
        })
    }
};

export const editingnote =(id)=>{
    return {type:actionTypes.Editing,id}
}

export const editsuccess = (id,text)=>{
    return {type:actionTypes.Edit_Success,id,text}
}

export const editfail = (error)=>{
    return {type:actionTypes.Edit_Fail,error}
}

export const editnote = (id,text)=>{
        const headers = {
            'x-auth':localStorage.token
        }
        return dispatch =>{
            const data = {
                text
            }
            axios.patch('/todos/'+id,data,{headers})
            .then(res=>{
                dispatch(editsuccess(id,text));
            }).catch(e=>{
                dispatch(editfail(e));
            })
        }
}