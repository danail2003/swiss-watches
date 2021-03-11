import React, { useState, useEffect, useCallback } from 'react';
import MyWatch from '../my-watch/index';
import styles from './render-my-watches.module.css';

const RenderMyWatches = () => {
    const [watches, setWatches] = useState([]);
    const url = 'https://swiss-watches-e8910-default-rtdb.firebaseio.com';
    const creator = localStorage.getItem('user');

    const getWatches = useCallback(async () => {
        const promise = await fetch(`${url}/watches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

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