import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Todoitem from './Todoitem/Todoitem';
import loadingImage from '../../assets/loading.gif';

export class ListTodo extends React.Component{
    componentWillMount(){
        this.props.onloadnotelist();
        this.props.addinit();
        this.props.editingnote('');
    }


    render(){
        let todos = null;
        
        if(this.props.notes && !this.props.ings){
            todos = (
            <div>{
                this.props.notes.map((todo)=>{
                    return (
                    <Todoitem key={todo._id} 
                        id={todo._id} 
                        todo={todo.text} 
                        completed={todo.completed} 
                        oncompletenote={id=>{this.props.completenote(todo._id,todo.completed)}} 
                        ondeleteclick={id=>{this.props.deletenote(todo._id)}} 
                        oneditclick={id=>{this.props.editingnote(todo._id)}}
                        editing={todo._id===this.props.editing}
                    />)
                })
            }
            </div>)
        }else{
            todos = <img src={loadingImage}  alt=""/>
        }
        return (todos);
    }
}
const mapStateToProps = (state)=>{
    return {
        notes:state.todo.notes,
        ings:state.todo.listing,
        editing:state.todo.editing
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        onloadnotelist:()=>dispatch(actions.listnote()),
        addinit:()=>dispatch(actions.addinit()),
        deletenote:(id)=>dispatch(actions.deletenote(id)),
        completenote:(id,completed)=>dispatch(actions.completenote(id,completed)),
        editingnote:(id)=>dispatch(actions.editingnote(id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTodo);