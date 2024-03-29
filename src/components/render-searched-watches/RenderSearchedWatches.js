import React, { useState, useEffect, useCallback } from 'react';
import Watch from '../watch/index';
import styles from './render-searched-watches.module.css';
import Config from '../../Config';
import requester from '../../services/requester';

const RenderSearchedWatches = () => {
    const [watches, setWatches] = useState([]);
    const creator = localStorage.getItem('user');
    const searchedWatches = window.location.pathname;
    console.log(searchedWatches)

    const getWatches = useCallback(async () => {
        const promise = await requester(`${Config.dataUrl}/watches.json`, 'GET');
        let array = [];

        const watches = await promise.json();

        if (!watches) {
            return null;
        }
        else {
            array = Object.entries(watches).sort((a, b) => Number(a[1].price) - Number(b[1].price));
        }

        setWatches(array);
    }, []);

    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        return (
            <div className={styles.watches}>
                {watches.filter(watch => watch[1].creator !== creator && watch[1].name.includes(searchedWatches)).map((watch, index) => (
                    <Watch key={index} {...watch} />))}
            </div>
        )
    };

    return (
        <>{render()}</>
    );
};

export default RenderSearchedWatches;