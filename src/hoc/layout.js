import React,{Component} from 'react';
import Navgation from '../components/Navigation/Navgation';
import {connect} from 'react-redux';
class Layout extends Component{

    render(){
        return (
            <Navgation isAuth={this.props.isAuth}/>
        );
    }

};
const mapStateToProps = state=>{
    return {
        isAuth:state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);