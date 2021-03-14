import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import styles from './create.module.css';

const CreateWatch = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const url = `https://swiss-watches-e8910-default-rtdb.firebaseio.com`;
    const creator = localStorage.getItem('user');

    const Submit = async (e) => {
        e.preventDefault();

        if(!name || !price || !description || !image || name.length < 4 || description.length < 10
            || price < 0 || !image.includes('http')) {
                alert('Invalid data!');
                
                return;
            }

        await fetch(`${url}/watches.json`, {
            method: 'POST',
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
                history.push('/');
            })
            .catch(e => {
                alert(e.message);
            });
    };

    return (
        <PageLayout>
            <Title title='Add watch' />
            <div className={styles.container}>
                <form className={styles['create-form']} onSubmit={Submit}>
                    <fieldset>
                        <legend>&lt;/&gt;</legend>
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} />
                        <label htmlFor='desc'>Description</label>
                        <input id='desc' type='text' onChange={(e) => setDescription(e.target.value)} value={description} />
                        <label htmlFor='price'>Price</label>
                        <input id='price' type='text' onChange={(e) => setPrice(e.target.value)} value={price} />
                        <label htmlFor='image'>Image</label>
                        <input id='image' type='url' onChange={(e) => setImage(e.target.value)} value={image} />
                        <button type='submit'>Add</button>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default CreateWatch;