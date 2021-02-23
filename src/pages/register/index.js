import React, { useState } from 'react';
import styles from './register.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';

const Register = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[rePassword, setRePassword] = useState('');

    const Submit = async(e) => {
        e.preventDefault();

        if(!username || !password || !rePassword || password !== rePassword || username.length < 3 || password.length < 6) {
            return;
        }

        
    };

    return (
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
                <div>
                    <label htmlFor='re-password'>Repeat Password</label>
                    <input id='re-password' type='password' onChange={(e) => setRePassword(e.target.value)} value={rePassword} />
                </div>
                <button type='submit'>Register</button>
            </form>
        </PageLayout>
    );
};

export default Register;