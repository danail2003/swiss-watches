import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const Edit = () => {
    return (
        <PageLayout>
            <Title title='Edit' />
            <form>
                <fieldset>
                    <legend>Edit</legend>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' />
                    <label htmlFor='descrption'>Description</label>
                    <input id='description' type='text' />
                    <label htmlFor='price'>Price</label>
                    <input id='price' type='text' />
                    <label htmlFor='image'>Name</label>
                    <input id='image' type='url' />
                    <button>Edit</button>
                </fieldset>
            </form>
        </PageLayout>
    );
}

export default Edit;