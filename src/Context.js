import React from 'react';

const Context = React.createContext({
    user: null,
    logIn: () => {},
    logOut: () => {}
});

export default Context;