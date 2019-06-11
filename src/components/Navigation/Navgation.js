import React from 'react';

import Navgationitem from './Navigationitem/Navgationitem';

const Navgation = (props)=>{  
    let Nav = 
    <ul className="navbar-nav ml-auto">
    <Navgationitem link="/logout">Logout</Navgationitem>
    </ul>;

    if(!props.isAuth){
        Nav = (
        <ul className="navbar-nav ml-auto">
        <Navgationitem link="/register">Register</Navgationitem>
        <Navgationitem link="/login">Login</Navgationitem>
        </ul>);
    }

    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
         <Navgationitem link="/">Todo</Navgationitem>
            <Navgationitem link="/add">Add</Navgationitem>
        </ul>
        {Nav}
    </nav>
    )
};

export default Navgation;