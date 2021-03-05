import React, { useState, useEffect } from 'react';
import Watch from '../components/watch/index';

const RenderWatches = () => {
    const [watches, setWatches] = useState([]);
    const url ='https://swiss-watches-e8910-default-rtdb.firebaseio.com';

    const getWatches = async () => {
        const promise = await fetch(`${url}/watches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const watches = await promise.json();

        setWatches(watches);
    };

    useEffect(() => {
        getWatches();
    });

    const renderWatches = () => {
        return watches.map((watch) => {
           return(
               <Watch key={watch._id} {...watch} />
           ) 
        })
    };

    return (
        <div>{renderWatches()}</div>
    );
};

export default RenderWatches;