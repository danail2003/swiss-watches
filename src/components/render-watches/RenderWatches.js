import React, { useState, useEffect, useCallback } from 'react';
import Watch from '../watch/index';
import styles from './render-watches.module.css';

const RenderWatches = () => {
    const [watches, setWatches] = useState([]);
    const url ='https://swiss-watches-e8910-default-rtdb.firebaseio.com';
    const creator = localStorage.getItem('user');

    const getWatches = useCallback(async () => {
        const promise = await fetch(`${url}/watches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const watches = await promise.json();

        const array = Object.entries(watches).sort((a, b) => Number(a[1].price) - Number(b[1].price));

        setWatches(array);
    }, []);
    
    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        return (
            <div className={styles.watches}>
                {creator ? watches.filter(watch => watch[1].creator !== creator).map((watch, index) => (
                       <Watch key={index} {...watch} />
                )) : watches.map((watch, index) => (
                    <Watch key={index} {...watch} />
                ))}
            </div>
        )
    };

    return (
        <>{render()}</>
    );
};

export default RenderWatches;