import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './watch.module.css';

const Watch = (props) => {
    const history = useHistory();
    const url = `https://swiss-watches-e8910-default-rtdb.firebaseio.com`;
    const loggedIn = localStorage.getItem('user');

    const deleteWatch = async (e) => {
        e.preventDefault();

        if(!loggedIn) {
            history.push('/login');
            return;
        }

        const id = e.target.getAttribute('id');

        await fetch(`${url}/watches/${id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                history.push('/');
            })
            .catch((e) => {
                alert(e.message);
            })
    };

    return (
        <article className={styles.watch}>
            <img src={props[1].image} alt='watch' className={styles['watch-image']} />
            <div className={styles.info}>
                <p>{props[1].name}</p>
                <p>{props[1].description}</p>
                <p>{props[1].price}</p>
            </div>
            <button className={styles.btn} type='submit' id={props[0]} onClick={deleteWatch}>Buy</button>
        </article>
    );
};

export default Watch;