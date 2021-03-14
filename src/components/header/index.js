import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Link from '../link/index';
import getNavigation from '../../getNavigation';
import styles from './header.module.css';
import logo from '../../images/rolex_logo.png';
import Context from '../../Context';

const Header = () => {
    const [searchedWatch, setSearchedWatch] = useState('');
    const { user } = useContext(Context);
    const navigation = getNavigation(user);
    const history = useHistory();
    const creator = localStorage.getItem('user');

    const goToHome = () => {
        history.push('/');
    };

    const findWatches = (e) => {
        e.preventDefault();

        history.push(`/watches/search=${searchedWatch}`);
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
                        <ul>
                            {
                                navigation.map((nav, index) => {
                                    return <Link key={index} href={nav.link} title={nav.title} />
                                })
                            }
                            <input placeholder='Search...' onChange={(e) => {setSearchedWatch(e.target.value)}} />
                            <i className="fas fa-search" onClick={findWatches}></i>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;