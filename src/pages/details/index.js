import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import Button from "../../components/button";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import requester from "../../services/requester";
import Config from '../../Config';

const Details = () => {
    const id = window.location.pathname.slice(9);
    const [watch, setWatch] = useState('');
    const history = useHistory();
    const loggedIn = localStorage.getItem('user');

    const makeOrder = async (e) => {
        e.preventDefault();

        if (!loggedIn) {
            history.push('/login');
            return;
        }

        const id = e.target.getAttribute('id');

        history.push(`/orders/${id}`);
    };

    const getWatch = useCallback(async () => {
        const request = await requester(`${Config.dataUrl}/watches/${id}.json`, 'GET');

        const response = await request.json();
        setWatch(response);
    }, [id]);

    useEffect(() => {
        getWatch();
    }, [getWatch]);

    return (
        <PageLayout>
            <Title title='Details' />
            <div>
                <h1>{watch.name}</h1>
                <img src={watch.image} alt='watch' />
                <p>{watch.description}</p>
                <Button type='submit' id={id} onClick={makeOrder} name='Buy' />
            </div>
        </PageLayout>
    );
};

export default Details;