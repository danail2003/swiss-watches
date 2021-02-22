import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

const PageLayout = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
};

export default PageLayout;