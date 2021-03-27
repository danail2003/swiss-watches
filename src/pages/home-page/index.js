import React from 'react';
import styles from './home.module.css';
import PageLayout from '../../components/page-layout/index';
import image from '../../images/swiss-watches.jpg';

const Home = () => {
    return (
        <PageLayout>
            <main>
                <h1 className={styles.header}>The best site for watches</h1>
                <img src={image} alt='swiss-watches' className={styles.image}></img>
            </main>
        </PageLayout>
    );
};

export default Home;