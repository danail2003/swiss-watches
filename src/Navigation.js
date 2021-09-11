import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../src/pages/home-page/index';
import Register from '../src/pages/register/index';
import Login from '../src/pages/login/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Account from './pages/account/index';
import CreateWatch from './pages/create-watch/index';
import Error from './pages/error/index';
import Context from './Context';
import Watches from './pages/watches/index';
import Edit from './pages/edit/index';
import Order from './pages/order/index';
import Details from './pages/details';

const Navigation = () => {
    const context = useContext(Context);
    const loggedIn = context.user && context.user.loggedIn;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/watches' component={Watches} />
                <Route path='/register'>
                    {loggedIn ? (<Redirect to='/' />) : (<Register />)}
                </Route>
                <Route path='/login'>
                    {loggedIn ? (<Redirect to='/' />) : (<Login />)}
                </Route>
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/account'>
                    {loggedIn ? (<Account />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/create'>
                    {loggedIn ? (<CreateWatch />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/edit'>
                    {loggedIn ? (<Edit />) : (<Redirect to='/' />)}
                </Route>
                <Route path='/orders'>
                    {loggedIn ? <Order /> : <Redirect to='/login' />}
                </Route>
                <Route path='/details'>
                    {loggedIn ? <Details /> : <Redirect to='/login' />}
                </Route>
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;