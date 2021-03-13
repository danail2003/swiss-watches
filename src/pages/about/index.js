import React from 'react';
import PageLayout from '../../components/page-layout/index';
import styles from './about.module.css';

const About = () => {
    return (
        <PageLayout>
            <h1 className={styles.heading}>About us</h1>
            <video src='https://content.rolex.com/dam/homepage/hss/watches/professional-watches/sea-dweller/m126603-0001/homepage-sea-dweller-m126603-0001.mp4' type='video/mp4' autoPlay playsInline loop preload='auto' className={styles.video}>
            </video>
            <div className={styles.container}>
                <p className={styles['first-paragraph']}>Everyone can wear a Swiss watch. Our watches don’t fit a standard nor a frame.
                Some don’t even fit the laws of gravity! One thing they all fit is your personality.
                There is always space for you to shine when you wear a Swiss.
                </p>
                <p className={styles['second-paragraph']}>Durable. Beautiful. A watch for life.
                Behind it all, a tradition of visionary research and cutting-edge materials technology.
                Swiss watches would like to present advertising campaign, which has been launched all over the world.
                The main goal of the campaign, was to show the diversity of our collection.</p>
            </div>
        </PageLayout>
    );
};

export default About;