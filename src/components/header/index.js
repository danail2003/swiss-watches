import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Link from '../link/index';
import getNavigation from '../../services/getNavigation';
import styles from './header.module.css';
import logo from '../../images/rolex_logo.png';
import Context from '../../Context';

const Header = () => {
    const { user } = useContext(Context);
    const navigation = getNavigation(user);
    const history = useHistory();
    const creator = localStorage.getItem('user');

    const goToHome = () => {
        history.push('/');
    };

    return (
        <header className={styles.heading}>
            <div>
                {creator ? <span className={styles.creator}>{`Welcome, ${creator}`}</span> : null}
            </div>
            <div>
                <div className={styles['heading-logo']}>
                    <h3 onClick={goToHome}>Swiss<img src={logo} alt="logo" className={styles.logo} />Watches</h3>
                    <nav className={styles.nav}>
                        <ul className={styles}>
                            {
                                navigation.map((nav, index) => {
                                    return <Link key={index} href={nav.link} title={nav.title} />
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;