import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';
import Context from '../../Context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const context = useContext(Context);
    const apiKey = 'AIzaSyDYNWoeX46SOv9246LONV9BWFY8JGEoI_0';

    const Submit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Invalid email or password!');

            return;
        }

        try {
            const request = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const response = await request.json();
            context.logIn({
                ...response
            });

            history.push('/');
        }
        catch (e) {
            alert(e.message);
        }
    };

    return (
        <PageLayout>
            <Title title='Login' />
            <div className={styles.container}>
                <form className={styles['login-form']} onSubmit={Submit}>
                    <fieldset>
                        <legend>&lt;/&gt;</legend>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button type='submit'>Login</button>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default Login;