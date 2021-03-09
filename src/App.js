import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Context from './Context';

const App = (props) => {
  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null);

  const cookie = document.cookie && null;

  const logIn = useCallback((user) => {
    const email = user ? user.email : cookie;

    if (email) {
      document.cookie = `user=${email}`;
    }

    setUser({
      ...user,
      loggedIn: true
    });
  }, [cookie]);

  useEffect(() => {
    const cookie = document.cookie;

    if (!cookie) {
      logOut();
      return;
    }
    else {
      logIn({
        user: cookie
      })
    }
  }, [logIn])

  const logOut = () => {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    setUser({
      loggedIn: false,
    })
  };

  return (
    <Context.Provider value={{
      user,
      watches: [],
      logIn,
      logOut
    }}>
      {props.children}
    </Context.Provider>
  );
}

export default App;
