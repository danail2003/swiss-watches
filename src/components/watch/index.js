import React from 'react';
import styles from './watch.module.css';

const Watch = ({ name, description, image, price }) => {
    return (
        <article>
            <img src={image} alt='watch' />
            <div>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default Watch;