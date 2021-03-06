import React from 'react';

const MyWatch = ({name, description, price, image}) => {
    return (
        <article>
            <img src={image} alt='watch' />
            <div>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </article>
    );
};

export default MyWatch;