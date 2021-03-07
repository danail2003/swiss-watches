import React, {useState, useEffect, useCallback} from 'react';
import MyWatch from '../components/my-watch/index';

const RenderMyWatches = () => {
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

        const array = Object.entries(watches);

        setWatches(array);
    }, []);
    
    useEffect(() => {
        getWatches();
    }, [getWatches]);

    const render = () => {
        return (
            <div>
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