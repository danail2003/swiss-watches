import React from 'react';
import getNavigation from '../../services/getNavigation';
import Link from '../link/index';
import styles from './footer.module.css';

const Footer = () => {
    const navigation = getNavigation();

    return(
        <footer className={styles}>
            <ul>
                {
                    navigation.map((path, index) => {
                        return <Link key={index} href={path.link} title={path.title} />
                    })
                }
            </ul>
            <p>All Rights reserved</p>
        </footer>
    );
};

export default Footer;