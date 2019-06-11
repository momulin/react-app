import React from 'react';

const input = (props)=>{
    let inputElement = null;
    switch (props.type) {
        case "checkbox":
            inputElement = (
                <div className="form-group form-check">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> {props.children}
                </label>
                </div>
            )
            break;
    
        default:
            inputElement = (
                <div className="form-group">
                <label htmlFor={props.htmlFor}>{props.children}</label>
                <input ref={props.textref} type={props.type} onChange={props.changed} className="form-control" />
                </div>
            )
            break;
    }
    return inputElement;
};

export default input;