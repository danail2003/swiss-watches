import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import Context from '../../Context';
import RenderMyWatches from '../../components/render-my-watches/RenderMyWatches';
import styles from './account.module.css';
import Button from '../../components/button/index';
import receiveNotification from '../../services/notifications';

const Account = () => {
    const context = useContext(Context);
    const history = useHistory();

    const Submit = () => {
        context.logOut();
        history.push('/');
        receiveNotification('Loged out.');
    };

    return (
        <PageLayout>
            <Title title='My account' />
            <div className={styles['sign-out']}>
                <Button className={styles.btn} onClick={Submit} name='Sign out' />
            </div>
            <RenderMyWatches />
        </PageLayout>
    );
};

export default Account;