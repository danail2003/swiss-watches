import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import Context from '../../Context';

const Account = () => {
    const context = useContext(Context);
    const history = useHistory();

    const Submit = () => {
        context.logOut();
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        history.push('/');
    };

    return (
        <PageLayout>
            <Title title='My account' />
            <div>
                <button onClick={Submit}>Sign out</button>
            </div>
        </PageLayout>
    );
};

export default Account;