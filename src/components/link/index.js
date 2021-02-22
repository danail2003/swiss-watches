import React from 'react';
import styles from './link.module.css';
import { Link } from 'react-router-dom';

const LinkComponent = ({ href, title }) => {
    return(
        <li>
            <a className={styles.link} href={href}>{title}</a>
        </li>
    );
};

export default LinkComponent;