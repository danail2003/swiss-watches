import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ href, title, type }) => {
    return(
        <li>
            <a to={href}>{title}</a>
        </li>
    );
};

export default LinkComponent;