import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import image from '../../images/system-failure.gif';
import styles from './error.module.css';

const Error = (props) => {
    console.log(props)
    return (
        <PageLayout>
            <Title title={props.location.state} />
            <img className={styles.image} src={image} alt='failure' />
        </PageLayout>
    );
};

export default Error;