import React from 'react';
import {NavLink} from 'react-router-dom';

const Navgationitem =(props)=>{
    return (
        <li className="nav-item">
            <NavLink to={props.link} exact={props.exact} className="nav-link">{props.children}</NavLink>
        </li>
    );
}

export default Navgationitem;