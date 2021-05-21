import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './register.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';
import Config from '../../Config';
import requester from '../../services/requester';
import Button from '../../components/button/index';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const history = useHistory();

    const Submit = async (e) => {
        e.preventDefault();

        if (!email || !password || !rePassword || password !== rePassword || email.length < 10
            || password.length < 6 || !email.includes('@')) {
            history.push('/error', 'Invalid email or password. Or password and rePassword are not the same!');
            return;
        }

        await requester(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Config.apiKey}`, 'POST', { email, password })
            .then(() => {
                history.push('/login');
            })
            .catch(e => history.push('/error', e.message));
    };

    return (
        <PageLayout>
            <Title title='Register' />
            <div className={styles.container}>
                <form className={styles['register-form']} onSubmit={Submit}>
                    <fieldset>
                        <legend>&lt;/&gt;</legend>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        <label htmlFor='re-password'>Repeat Password</label>
                        <input id='re-password' type='password' onChange={(e) => setRePassword(e.target.value)} value={rePassword} />
                        <Button type='submit' name='Register' />
                        <Link to='/login' className={styles['login-link']}>Already registered?</Link>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default Register;