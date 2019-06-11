import * as actionType from '../actions/actionType';
import {updateObject} from '../../shared/utility';

const initialState = {
    notes:null,
    listing:false,
    editing:''
};

const listnotestart =(state,action)=>{
    return updateObject(state,{listing:true})       
}

const updatenote = (state,action)=>{
    return updateObject(state,{notes:action.notes,listing:false})
}

const deletenote = (state,action)=>{
    let filterarray = state.notes.filter((note)=>{
        return note._id !== action.id
    })

    return updateObject(state,{notes:filterarray});
}

const completednote = (state,action)=>{
    let maparray = state.notes.map((note)=>{
        if(note._id===action.id){
             note.completed=action.completed
        }
        return note
    });
    

    return updateObject(state,{notes:maparray});
}

const editingnote = (state,action)=>{
    return {...state,editing:action.id}
}
const editnote = (state,action)=>{
    let maparray = state.notes.map((note)=>{
        if(note._id===action.id){
             note.text=action.text
             
        }
        return note
    });
    

    return updateObject(state,{notes:maparray,editing:''});
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.listNote_Start:
            return listnotestart(state,action);
        break;
        case actionType.listNote_Success:
            return updatenote(state,action);
        break;
        case actionType.Delete_Success:
            return deletenote(state,action);
        break;
        case actionType.Complete_Success:
            return completednote(state,action);
        break;
        case actionType.Editing:
            return editingnote(state,action);
        break;
        case actionType.Edit_Success:
            return editnote(state,action);
        break;
        default:

        break;
    }
    return state;
};

export default reducer;