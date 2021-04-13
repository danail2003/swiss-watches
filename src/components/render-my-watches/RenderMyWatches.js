import React, { useState, useEffect, useCallback } from 'react';
import MyWatch from '../my-watch/index';
import styles from './render-my-watches.module.css';
import Config from '../../Config';
import requester from '../../services/requester';

const RenderMyWatches = () => {
    const [watches, setWatches] = useState([]);
    const creator = localStorage.getItem('user');

    const getWatches = useCallback(async () => {
        const promise = await requester(`${Config.dataUrl}/watches.json`, 'GET');

        const watches = await promise.json();

        const array = Object.entries(watches);

        setWatches(array);
    }, []);

    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        return (
            <div className={styles.watches}>
                {watches.filter(watch => watch[1].creator === creator).map((watch, index) => (
                    <MyWatch key={index} {...watch} />
                ))}
            </div>
        )
    };

    return (
        <div>{render()}</div>
    );
};

export default RenderMyWatches;