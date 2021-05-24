import React from 'react';
import { useHistory } from 'react-router-dom';
import requester from '../../services/requester';
import Config from '../../Config';

const Order = async (props) => {
    const history = useHistory();
    const id = props.id;
    console.log(id);

    await requester(`${Config.dataUrl}/orders.json`, 'POST', {
        watch: id,
        createdOn: new Date(),
        user: localStorage.getItem('user'),
    })
        .then(() => {
            console.log('successful');
        })
        .catch((e) => {
            history.push('/error', e.message);
        })

    return (
            <h1>Hello!</h1>
        );
};

export default Order;