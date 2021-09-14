import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <PageLayout>
            <Title title='Contact us' />
            <div className={styles.container}>
                <section className={styles.info}>
                    <h2 className={styles.heading}>Swiss Watches</h2>
                    <p><strong>str:</strong> Silistra, Bulgaria</p>
                    <p><strong>tel:</strong> 0888888888</p>
                    <p><strong>fax:</strong> 0888888889</p>
                    <p><strong>email:</strong> someone@some.bg</p>
                    <div>
                        <p className={styles.question}>If you have some question, please contact us!!!</p>
                    </div>
                </section>
                <div className={styles.widget}>
                    <iframe title='Swiss Watches' width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dulovo+(Swiss%20Watches)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f6b57dbcaa3c7bf3113ace31466bb2129a9d8a7e'></script>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;