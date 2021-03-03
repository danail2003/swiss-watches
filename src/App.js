import './App.css';
import React, { useState, useEffect } from 'react';
import Context from './Context';

const App = (props) => {
  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null)

  const cookie = document.cookie && null;

  const logIn = (user) => {
    const email = user ? user.email : cookie;

    if (email) {
      document.cookie = `user=${email}`;
    }

    setUser({
      ...user,
      loggedIn: true
    });
  };

  const watches = props.watches || [];

  useEffect(() => {
    const cookie = document.cookie;

    if (!cookie) {
      logOut();
      return;
    }
    else {
      const { idToken } = cookie;

      logIn({
        user: idToken
      })
    }
  }, [])

  const logOut = () => {
    setUser({
      loggedIn: false
    })
  };

  return (
    <Context.Provider value={{
      user,
      watches,
      logIn,
      logOut
    }}>
      {props.children}
    </Context.Provider>
  );
}

export default App;
