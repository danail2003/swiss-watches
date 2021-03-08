import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Edit = () => {
    const url = 'https://swiss-watches-e8910-default-rtdb.firebaseio.com';
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const id = window.location.pathname;
    const watch = id.slice(7);
    const creator = document.cookie.slice(5);

    const getWatch = useCallback(async () => {
        const request = await fetch(`${url}/watches/${watch}.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = await request.json();

        setName(response.name);
        setDescription(response.description);
        setPrice(response.price);
        setImage(response.image);
    }, [watch]);

    useEffect(() => {
        getWatch();
    }, [getWatch])

    const editWatch = async (e) => {
        e.preventDefault();

        await fetch(`${url}/watches/${watch}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    image,
                    creator
                })
            })
            .then(() => {
                history.push('/account');
            })
            .catch((e) => {
                alert(e.message);
            });
    };

    return (
        <PageLayout>
            <Title title='Edit' />
            <form onSubmit={editWatch}>
                <fieldset>
                    <legend>Edit</legend>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' onChange={e => setName(e.target.value)} value={name} />
                    <label htmlFor='descrption'>Description</label>
                    <input id='description' type='text' onChange={e => setDescription(e.target.value)} value={description} />
                    <label htmlFor='price'>Price</label>
                    <input id='price' type='text' onChange={e => setPrice(e.target.value)} value={price} />
                    <label htmlFor='image'>Image</label>
                    <input id='image' type='url' onChange={e => setImage(e.target.value)} value={image} />
                    <button type='submit'>Edit</button>
                </fieldset>
            </form>
        </PageLayout>
    );
}

export default Edit;