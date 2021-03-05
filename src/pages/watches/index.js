import React from 'react';
import RenderWatches from '../../services/render-watches';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Watches = () => {

    return (
        <PageLayout>
            <Title title='Watches' />
            <RenderWatches />
        </PageLayout>
    );
};

export default Watches;