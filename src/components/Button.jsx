import React from "react";
import "./Button.css"

const ft_isdigit = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = props => (
    <div className={`button-wrapper ${ft_isdigit(props.children) ? null : "operator"}`}>
        {props.children}
    </div>);

export default Button;