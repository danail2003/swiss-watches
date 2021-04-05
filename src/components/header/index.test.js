import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';
import Context from '../../Context';
import { Route, BrowserRouter } from 'react-router-dom';
import getNavigation from '../../getNavigation';

describe('Header', () => {
    it('should return correct value after authenticate', () => {
        const links = getNavigation({
            loggedIn: true,
        });

        const userLinks = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Account',
                link: '/account'
            },
            {
                title: 'Add',
                link: '/create'
            },
            {
                title: 'Watches',
                link: '/watches'
            },
            {
                title: 'About us',
                link: '/about'
            },
            {
                title: 'Contact us',
                link: '/contact'
            }
        ];

        expect(links).toStrictEqual(userLinks);
    });

    it('should return correct value if is not authenticated', () => {
        const links = getNavigation({
            loggedIn: false
        });

        const guestLinks = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Watches',
                link: '/watches'
            },
            {
                title: 'Register',
                link: '/register'
            },
            {
                title: 'Login',
                link: '/login'
            },
            {
                title: 'About us',
                link: '/about'
            },
            {
                title: 'Contact us',
                link: '/contact'
            }
        ];

        expect(links).toStrictEqual(guestLinks);
    });

    it('should render authenticated routes', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <Context.Provider value={{
                        user: {
                            loggedIn: true
                        }
                    }}>
                        <Header />
                    </Context.Provider>
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });

    it('should render non-authenticated routes', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <Context.Provider value={{
                        user: {
                            loggedIn: false
                        }
                    }}>
                        <Header />
                    </Context.Provider>
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});