import './App.css';
import Rect, {useState} from 'react';
import Context from './Context';
import PageLayout from './components/page-layout/index';
import Home from './pages/home-page/index';

const App = (props) => {
  const[user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  }: null)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    });
  };

  const watches = props.watches || [];

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
