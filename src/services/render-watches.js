import React, { useState, useEffect, useCallback } from 'react';
import Watch from '../components/watch/index';

const RenderWatches = (props) => {
    const [watches, setWatches] = useState([]);

    const getWatches = useCallback(async () => {
        const promise = await fetch(`http://localhost:9999/api/watches?length=${props.length}`);
        const watches = await promise.json();

        console.log(watches);
        setWatches(watches);
    }, [props.length]);

    const renderWatches = () => {
        return watches.map((watch) => {
           return(
               <Watch key={watch._id} {...watch} />
           ) 
        })
    };

    useEffect(() => {
        getWatches();
    }, [getWatches]);

    return (
        <div>{renderWatches()}</div>
    );
};

export default RenderWatches;