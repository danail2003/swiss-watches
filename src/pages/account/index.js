import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import Context from '../../Context';
import RenderMyWatches from '../../services/RenderMyWatches';

const Account = () => {
    const context = useContext(Context);
    const history = useHistory();

    const Submit = () => {
        context.logOut();
        history.push('/');
    };

    return (
        <PageLayout>
            <Title title='My account' />
            <div>
                <button onClick={Submit}>Sign out</button>
            </div>
            <RenderMyWatches />
        </PageLayout>
    );
};

export default Account;