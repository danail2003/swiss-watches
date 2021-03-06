import React, { useState, useEffect, useCallback } from 'react';
import Watch from '../components/watch/index';

const RenderWatches = () => {
    const [watches, setWatches] = useState([]);
    const url ='https://swiss-watches-e8910-default-rtdb.firebaseio.com';

    const getWatches = useCallback(async () => {
        const promise = await fetch(`${url}/watches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const watches = await promise.json();

        const array = Object.values(watches)

        setWatches(array);
    }, []);
    
    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        console.log(watches)
        return watches.map((watch, index) => {
           return(
               <Watch key={index} {...watch} />
           ) 
        })
    };

    return (
        <div>{render()}</div>
    );
};

export default RenderWatches;