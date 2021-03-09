import React from 'react';
import styles from './home.module.css';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Home = () => {
    return(
        <PageLayout>
            <Title title='Everything is here' className={styles.heading} />
            <main>
                <video autoPlay playsInline muted loop className={styles.video}>
                    <source src='https://www.tissotwatches.com/media/Videos/video_homepage_prx.mp4' type='video/mp4' />
                </video>
            </main>
        </PageLayout>
    );
};

export default Home;