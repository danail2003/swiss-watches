import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Contact = () => {
    return (
        <PageLayout>
            <Title title='Contact us' />
            <div>
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Vasil%20Levski%2089%20Dulovo+(Swiss%20Watches)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.horando.de/en/'>Luxury watches</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f6b57dbcaa3c7bf3113ace31466bb2129a9d8a7e'></script>
            </div>
        </PageLayout>
    );
};

export default Contact;