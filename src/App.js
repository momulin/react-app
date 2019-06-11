import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/bootstrap.min.css'
import './App.css';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Auth from './containers/Auth/Auth';
import Register from './containers/Auth/Register';
import Logout from './containers/Auth/Logout';
import Layout from './hoc/layout';
import Add from './containers/AddTodo/AddTodo';
import ListNote from './containers/ListTodo/ListTodo'; 

class App extends Component {
  render() {
    let routes =(
      <Switch>
        <Route path="/login" exact component={Auth} />
        <Route path="/register" exact component={Register} />
        <Redirect to="/login" />
      </Switch>
    );
    if(this.props.isAuth){
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/add" component={Add} />
          <Route path="/" component={ListNote} />
          <Redirect to="/"/>
        </Switch>
      );
    }
    return (
      <div className="App">
        <Layout />
        <div className="App-des">
          {routes}
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    isAuth:state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
