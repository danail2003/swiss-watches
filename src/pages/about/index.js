import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const About = () => {
    return (
        <PageLayout>
            <Title title='About us' />
            <main>
                <h2>Our mission</h2>
                <p>Everyone can wear a Swiss watch. Our watches don’t fit a standard nor a frame.
                Some don’t even fit the laws of gravity! One thing they all fit is your personality.
                There is always space for you to shine when you wear a Swiss.
                </p>
                <p>Durable. Beautiful. A watch for life.
                Behind it all, a tradition of visionary research and cutting-edge materials technology.
                Swiss watches would like to present advertising campaign, which has been launched all over the world.
                The main goal of the campaign, was to show the diversity of our collection.</p>
            </main>
        </PageLayout>
    );
};

export default About;