import React, { useContext } from 'react';
import Link from '../link/index';
import getNavigation from '../../services/getNavigation';
import styles from './header.module.css';
import logo from '../../images/rolex_logo.png';
import Context from '../../Context';

const Header = () => {
    const { user } = useContext(Context);
    const navigation = getNavigation(user);

    return (
        <header className={styles.heading}>
            <div className={styles['heading-logo']}>
                <h3>Swiss<img src={logo} alt="logo" className={styles.logo} />Watches</h3>
            </div>
            <nav className={styles.nav}>
                <ul className={styles}>
                    {
                        navigation.map((nav, index) => {
                            return <Link key={index} href={nav.link} title={nav.title} />
                        })
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;