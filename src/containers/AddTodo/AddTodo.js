import React,{Component} from 'react';
import Input from '../../components/UI/Input';
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import loadingimage from '../../assets/loading.gif';

class AddTodo extends Component{

    constructor() {
        super();
        this.textInput = React.createRef();
    }

    state ={
        text:''
    }
    
    oninputchanged(event){
        this.setState({text:event.target.value})
    }

    submitHandler(event){
        event.preventDefault();
        this.props.addnote(this.state.text);
        
    }

    componentDidMount(){
        this.textInput.current.focus();  
    }
    render(){
        let summary = (<div>
            <form onSubmit={(event)=>this.submitHandler(event)}>
            <Input textref={this.textInput} changed={(event)=>this.oninputchanged(event)}>text:</Input>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
         </div>);
    
        if(this.props.added && !this.props.ings){
            summary = <Redirect to="/" />
        }else if(this.props.ings){
            summary = <img src={loadingimage}/>
        }

        return summary;
    }
}

const mapStateToProps =(state)=>{
    return {
        added:state.addtodo.added,
        ings:state.addtodo.ings
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        addnote:(text)=>dispatch(actions.addnote(text))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);