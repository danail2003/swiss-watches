import React, { useState, useEffect, useCallback } from 'react';
import Watch from '../components/watch/index';

const RenderWatches = () => {
    const [watches, setWatches] = useState([]);
    const url ='https://swiss-watches-e8910-default-rtdb.firebaseio.com';
    const creator = document.cookie.slice(5);

    const getWatches = useCallback(async () => {
        const promise = await fetch(`${url}/watches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const watches = await promise.json();

        const array = Object.values(watches);

        setWatches(array);
    }, []);
    
    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        return (
            <div>
                {watches.filter(watch => watch.creator === creator).map((watch, index) => (
                       <Watch key={index} {...watch} />
                ))}
            </div>
        )
    };

    return (
        <div>{render()}</div>
    );
};

export default RenderWatches;