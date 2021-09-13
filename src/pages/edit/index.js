import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import styles from './edit.module.css';
import Config from '../../Config';
import requester from '../../services/requester';
import Button from '../../components/button/index';
import receiveNotification from '../../services/notifications';

const Edit = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [currency, setCurrency] = useState('$');
    const history = useHistory();
    const id = window.location.pathname;
    const watch = id.slice(7);
    const creator = localStorage.getItem('user');

    const getWatch = useCallback(async () => {
        const request = await requester(`${Config.dataUrl}/watches/${watch}.json`, 'GET');

        const response = await request.json();

        setName(response.name);
        setDescription(response.description);
        setPrice(response.price);
        setImage(response.image);
        setCurrency(response.currency);
    }, [watch]);

    useEffect(() => {
        getWatch();
    }, [getWatch])

    const editWatch = async (e) => {
        e.preventDefault();

        if (!name || !price || !description || !image || name.length < 4 || description.length < 10
            || price < 0) {
            history.push('/error', 'Invalid data!');

            return;
        }

        await requester(`${Config.dataUrl}/watches/${watch}.json`, 'PUT',
            {
                name,
                description,
                price,
                image,
                currency,
                creator
            })
            .then(() => {
                history.push('/account');
                receiveNotification('Successfully edited.');
            })
            .catch((e) => history.push('/error', e.message));
    };

    return (
        <PageLayout>
            <Title title='Edit' />
            <div className={styles.container}>
                <form className={styles['edit-form']} onSubmit={editWatch}>
                    <fieldset>
                        <legend>&lt;/&gt;</legend>
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' onChange={e => setName(e.target.value)} value={name} />
                        <label htmlFor='descrption'>Description</label>
                        <textarea id='description' type='text' onChange={e => setDescription(e.target.value)} value={description} />
                        <label htmlFor='price'>Price</label>
                        <input id='price' type='text' onChange={e => setPrice(e.target.value)} value={price} />
                        <label htmlFor='currency'>Currency</label>
                        <select id='currency' onChange={(e) => setCurrency(e.target.value)} value={currency}>
                            <option value='$'>$</option>
                            <option value='£'>£</option>
                            <option value='€'>€</option>
                            <option value='BGN'>BGN</option>
                        </select>
                        <label htmlFor='image'>Image</label>
                        <input id='image' type='url' onChange={e => setImage(e.target.value)} value={image} />
                        <Button type='submit' name='Edit' />
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
}

export default Edit;