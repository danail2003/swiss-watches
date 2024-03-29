import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './my-watch.module.css';
import Config from '../../Config';
import requester from '../../services/requester';
import Button from '../button/index';
import notificationsReceiver from '../../services/notificationsReceiver';

const MyWatch = (props) => {
    const history = useHistory();

    const deleteWatch = async (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('id');

        await requester(`${Config.dataUrl}/watches/${id}.json`, 'DELETE')
            .then(() => {
                history.push('/');

                notificationsReceiver('Successfully deleted.');
            })
            .catch((e) => {
                history.push('/error', e.message);
            });
    };

    const navigateToEdit = (e) => {
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
                <Button className={styles['delete-btn']} type='submit' id={props[0]} onClick={deleteWatch} name='Delete' />
                <Button className={styles['edit-btn']} type='submit' onClick={navigateToEdit} name='Edit' />
            </div>
        </article>
    );
};

export default MyWatch;
