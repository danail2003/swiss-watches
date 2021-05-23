import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './watch.module.css';
import Config from '../../Config';
import requester from '../../services/requester';
import Button from '../button/index';

const Watch = (props) => {
    const history = useHistory();
    const loggedIn = localStorage.getItem('user');

    const deleteWatch = async (e) => {
        e.preventDefault();

        if (!loggedIn) {
            history.push('/login');
            return;
        }

        const id = e.target.getAttribute('id');

        const request = await requester(`${Config.dataUrl}/watches/${id}.json`, 'GET');
        let watch = await request.json();

        if (watch.qty === 1) {
            await requester(`${Config.dataUrl}/watches/${id}.json`, 'DELETE')
                .then(() => {

                })
                .catch((e) => {
                    history.push('/error', e.message);
                })
        }
        else {
            watch.qty -= 1;
            const { creator, name, description, price, image, qty, currency } = watch;
            await requester(`${Config.dataUrl}/watches/${id}.json`, 'PUT', {
                creator,
                description,
                currency,
                image,
                name,
                price,
                qty
            })
                .then(() => {

                })
                .catch((e) => {
                    history.push("/error", e.message);
                })
        }
    };

    return (
        <article className={styles.watch}>
            <img src={props[1].image} alt='watch' className={styles['watch-image']} />
            <div className={styles.info}>
                <p className={styles.name}>{props[1].name}</p>
                <p>{props[1].description}</p>
                <div>
                    <p>{props[1].price}</p>
                    <span>{props[1].currency}</span>
                </div>
            </div>
            <Button className={styles.btn} type='submit' id={props[0]} onClick={deleteWatch} name='Buy' />
        </article>
    );
};

export default Watch;