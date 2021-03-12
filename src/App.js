import React, { useState, useEffect, useCallback } from 'react';
import Context from './Context';
import './App.css';

const App = (props) => {
  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null);

  const item = localStorage.getItem('user') && null;
  
  const logIn = useCallback((user) => {
    const email = user ? user.email : item;
    
    if (email) {
      localStorage.setItem('user', email);
    }

    setUser({
      ...user,
      loggedIn: true
    });
  }, [item]);

  useEffect(() => {
    const item = localStorage.getItem('user');

    if (!item) {
      logOut();
      return;
    }
    else {
      logIn({
        user: item
      })
    }
  }, [logIn])

  const logOut = () => {
    localStorage.removeItem('user');

    setUser({
      loggedIn: false,
    })
  };

  return (
    <Context.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </Context.Provider>
  );
}

export default App;
