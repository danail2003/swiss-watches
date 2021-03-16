import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './my-watch.module.css';

const MyWatch = (props) => {
    const history = useHistory();
    const url = `https://swiss-watches-e8910-default-rtdb.firebaseio.com`;

    const deleteWatch = async (e) => {
        e.preventDefault();

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

    const naviagateToEdit = (e) => {
        e.preventDefault();

        history.push(`/edit/:${props[0]}`);
    };

    return (
        <article className={styles.watch}>
            <img className={styles['watch-image']} src={props[1].image} alt='watch' />
            <div className={styles.info}>
                <p className={styles.name}>{props[1].name}</p>
                <p>{props[1].description}</p>
                <div>
                    <p>{props[1].price}</p>
                    <span>{props[1].currency}</span>
                </div>
            </div>
            <div className={styles['account-btns']}>
                <button className={styles['delete-btn']} type='submit' id={props[0]} onClick={deleteWatch}>Delete</button>
                <button className={styles['edit-btn']} onClick={naviagateToEdit}>Edit</button>
            </div>
        </article>
    );
};

export default MyWatch;