import React from 'react';
import "./Button.css"

const ft_isdigit = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
    <div className={`button-wrapper ${ft_isdigit(props.children) ? null : "operator"}`} onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>);