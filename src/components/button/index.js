import React from 'react';

const Button = ({onClick, name, id, type, className}) => {
    return (
        <button className={className} type={type} onClick={onClick} id={id} >{name}</button>
    );
};

export default Button;