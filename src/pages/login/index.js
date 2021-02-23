import React, {useState} from 'react';
import styles from './login.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        
    };

    return(
        <PageLayout>
            <Title />
            <form onSubmit={Submit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type='submit'>Register</button>
            </form>
        </PageLayout>
    );
};

export default Login;