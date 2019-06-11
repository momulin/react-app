import React ,{Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input';

class Auth extends Component{
    componentWillMount(){
        this.props.failmessageinit();
    }

    state={
        email:'',
        password:'',
        checkbox:false
    }
    inputChangedHandler(event,id){
        
        this.setState({
            ...this.state,
            [id]:event.target.value
        });
        
        
    }
    submitHandler(event){
        event.preventDefault(); 
        this.props.onAuth(this.state.email,this.state.password);
    }

    render(){
        return (
            <div>
                <form onSubmit={event => this.submitHandler(event)}>
                    <div>
                        <Input htmlFor="email" type="email" changed={(event)=>this.inputChangedHandler(event,"email")} >Email address:</Input>
                        <Input htmlFor="pwd" type="password" changed={(event)=>this.inputChangedHandler(event,"password")}>Password:</Input>
                        {this.props.error?<div style={{color:'red'}}>{this.props.error}</div>:null}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        error:state.auth.failmessage
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth:(email,password)=>dispatch(actions.auth(email,password)),
        failmessageinit:()=>dispatch(actions.failmessageinit())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);