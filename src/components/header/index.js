import React from 'react';
import Link from '../link/index';

const Header = () => {
    return(
        <header>
            <div>
                <h3>Swiss Watches</h3>
                <img src="" alt="logo" />
            </div>
            <nav>
                <ul>
                    <Link href='/' title='Home' />
                    <Link href='/' title='About us' />
                    <Link href='/' title='Login' />
                    <Link href='/' title='Register' />
                </ul>
            </nav>
        </header>
    );
};

export default Header;