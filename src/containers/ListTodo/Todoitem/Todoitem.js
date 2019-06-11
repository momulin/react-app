import React from 'react';
import './Todoitem.css';
import deletebuttonimg from '../../../assets/delete.png';
import editbuttonimg from '../../../assets/edit.png';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index' 
class Todoitem extends React.Component{
    constructor() {
        super();
        this.textInput = React.createRef();
    }

    state={
        text:''
    }

    ontextchangehandler(event){
        this.setState({
            text:event.target.value
        });
        
    }
    onSubmitHandler(event){
        event.preventDefault();
        
        this.props.editnote(this.props.id,this.state.text);
        
    }
    componentDidUpdate(){
        if(this.props.editing){
            this.textInput.current.focus();
        }
    }
    onEditHandler(){
        this.props.oneditclick();
        this.setState({
            text:this.props.todo
        });
    }



    render(){
        let textstyle = {};
        if(this.props.completed){
            textstyle = {
                "float": "left",
                "textDecoration":"line-through red"
            }
        }else{
            textstyle = {
                "float": "left"
            }
        }

        return (
        <div className="todoitem">
            <form onSubmit={event=>this.onSubmitHandler(event)}>
        {this.props.editing?<input ref={this.textInput} onChange={(event)=>this.ontextchangehandler(event)} defaultValue={this.props.todo}  />:<div style={textstyle} onClick={this.props.oncompletenote}>{this.props.todo}</div>}
            <button type="button" className="button" onClick={this.props.ondeleteclick}><img src={deletebuttonimg} /></button>
            <button type="button" className="button" onClick={()=>this.onEditHandler()}><img src={editbuttonimg} /></button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        editnote:(id,text)=>dispatch(actions.editnote(id,text))
    }
}

export default connect(null,mapDispatchToProps)(Todoitem);