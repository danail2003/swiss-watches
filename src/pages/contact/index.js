import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Contact = () => {
    return (
        <PageLayout>
            <Title title='Contact us' />
            <main>
                <section>
                    <h2>Swiss Watches</h2>
                    <p>str. V. Levski №7899, Dulovo, Silistra, Bulgaria</p>
                    <p>tel: 0888888888</p>
                    <p>fax: 0888888889</p>
                    <p>email: someone@some.bg</p>
                </section>
                <div>
                    <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Vasil%20Levski%2089%20Dulovo+(Swiss%20Watches)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.horando.de/en/'>Luxury watches</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f6b57dbcaa3c7bf3113ace31466bb2129a9d8a7e'></script>
                </div>
            </main>
        </PageLayout>
    );
};

export default Contact;