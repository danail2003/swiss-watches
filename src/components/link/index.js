import React from 'react';
import styles from './link.module.css';
import { Link } from 'react-router-dom';

const LinkComponent = ({ href, title }) => {
    return(
        <li>
            <Link to={href} className={styles.link} >{title}</Link>
        </li>
    );
};

export default LinkComponent;