import React from 'react';
import RenderWatches from '../../services/render-watches';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Home = () => {
    return(
        <PageLayout>
            <Title title='All watches' />
            <RenderWatches />
        </PageLayout>
    );
};

export default Home;