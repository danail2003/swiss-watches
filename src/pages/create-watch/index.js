import React from 'react';
import PageLayout from '../../components/page-layout/index';
import Title from '../../components/title/index';

const CreateWatch = () => {

    return (
        <PageLayout>
            <Title title='Add watch' />
            <div>
                <form>
                    <fieldset>
                        <legend>Add Watch</legend>
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' />
                        <label htmlFor='desc'>Description</label>
                        <input id='desc' type='text' />
                        <label htmlFor='price'>Price</label>
                        <input id='price' type='text' />
                        <label htmlFor='image'>Image</label>
                        <input id='image' type='url' />
                        <button>Add</button>
                    </fieldset>
                </form>
            </div>
        </PageLayout>
    );
};

export default CreateWatch;