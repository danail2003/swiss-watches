import React, { useContext } from 'react';
import getNavigation from '../../services/getNavigation';
import Link from '../link/index';
import styles from './footer.module.css';
import Context from '../../Context';

const Footer = () => {
    const { user } = useContext(Context);
    const navigation = getNavigation(user);

    return (
        <footer className={styles}>
            <ul>
                {
                    navigation.filter(nav => { return nav.title === 'About us' || nav.title === 'Contact us' })
                        .map((path, index) => {
                            return <Link key={index} href={path.link} title={path.title} />
                        })
                }
            </ul>
            <p>All Rights reserved &copy; 2021</p>
        </footer>
    );
};

export default Footer;