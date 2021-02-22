import React from 'react';
import styles from './watch.module.css';

const Watch = ({ name, image, price }) => {
    return (
        <article>
            <img alt='watch' />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </article>
    );
};

export default Watch;