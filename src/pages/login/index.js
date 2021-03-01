import React, {useState} from 'react';
import styles from './login.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const apiKey = 'AIzaSyDYNWoeX46SOv9246LONV9BWFY8JGEoI_0';

    const Submit = async (e) => {
        e.preventDefault();

        if(!email || !password || !email.includes('@')) {
            return;
        }

        const request = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return(
        <PageLayout>
            <Title />
            <form onSubmit={Submit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </PageLayout>
    );
};

export default Login;