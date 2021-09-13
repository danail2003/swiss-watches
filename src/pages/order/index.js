import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './order.module.css';
import requester from '../../services/requester';
import Config from '../../Config';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import Button from '../../components/button/index';
import receiveNotification from '../../services/notifications';

const Order = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const history = useHistory();
    const id = window.location.pathname.slice(8);

    const makeOrder = async (e) => {
        e.preventDefault();

        if (firstName.length < 2 || lastName.length < 2 || !email || !email.includes('@') || !address || !number) {
            return;
        }

        await requester(`${Config.dataUrl}/orders.json`, 'POST', {
            watch: id,
            createdOn: new Date(),
            firstName,
            lastName,
            email,
            address,
            number
        })
            .then(() => {
                reduceQty();
            })
            .catch((e) => {
                history.push('/error', e.message);
            })
    };

    const reduceQty = async () => {
        const request = await requester(`${Config.dataUrl}/watches/${id}.json`, 'GET');

        const watch = await request.json();

        if (watch.qty === 1) {
            await requester(`${Config.dataUrl}/watches/${id}.json`, 'DELETE')
                .then(() => {
                    history.push('/');
                })
                .catch((e) => {
                    history.push('/error', e.message);
                });
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
                    history.push('/');

                    receiveNotification('Order is made.');
                })
                .catch((e) => {
                    history.push("/error", e.message);
                });
        }
    };

    return (
        <PageLayout>
            <Title title='Order' />
            <div className={styles.container}>
                <form className={styles['order-form']} onSubmit={makeOrder}>
                    <fieldset>
                        <legend>&lt;/&gt;</legend>
                        <label htmlFor='firstName'>First Name</label>
                        <input id='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        <label htmlFor='lastName'>Last Name</label>
                        <input id='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        <label htmlFor='address'>Address</label>
                        <input id='address' onChange={(e) => setAddress(e.target.value)} value={address} />
                        <label htmlFor='email'>Email</label>
                        <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor='phone'>Phone Number</label>
                        <input id='phone' onChange={(e) => setNumber(e.target.value)} value={number} />
                        <Button type='submit' name='Submit' />
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default Order;