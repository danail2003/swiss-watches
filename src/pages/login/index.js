import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';
import Context from '../../Context';
import Config from '../../Config';
import requester from '../../services/requester';
import Button from '../../components/button/index';
import receiveNotification from '../../services/notifications';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const context = useContext(Context);

    const Submit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            history.push('/error', 'Invalid email or password!');

            return;
        }

        const request = await requester(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Config.apiKey}`,
            'POST', { email, password });

        if (request.status === 200) {
            const response = await request.json();
            context.logIn(response);

            history.push('/');
            receiveNotification('Successfully loged in.');
        }
        else {
            history.push('/error', 'Something went wrong!!!');
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
                        <Button type='submit' name='Login' />
                        <Link to='/register' className={styles['register-link']}>Don't have account?</Link>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default Login;