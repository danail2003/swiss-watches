import React from 'react';
import RenderWatches from '../../components/render-watches/RenderWatches';
import RenderSearchedWatches from '../../components/render-searched-watches/index';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Watches = () => {
    const path = window.location.pathname.includes('search');

    return (
        <PageLayout>
            <Title title='Watches' />
            {path ? <RenderSearchedWatches /> : <RenderWatches />}
        </PageLayout>
    );
};

export default Watches;