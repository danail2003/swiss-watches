import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../src/pages/home-page/index';
import Register from '../src/pages/register/index';
import Login from '../src/pages/login/index';


const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;