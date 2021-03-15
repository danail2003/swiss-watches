import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './register.module.css';
import Title from '../../components/title/index';
import PageLayout from '../../components/page-layout/index';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const history = useHistory();
    const apiKey = 'AIzaSyDYNWoeX46SOv9246LONV9BWFY8JGEoI_0';

    const Submit = async (e) => {
        e.preventDefault();

        if (!email || !password || !rePassword || password !== rePassword || email.length < 10
            || password.length < 6 || !email.includes('@')) {
                history.push('/error', 'Invalid email, password or password and Repeat Password are not same!');

            return;
        }

        await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
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
                        <button type='submit'>Register</button>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default Register;