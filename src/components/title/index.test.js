import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Title from './index';

describe('Title', () => {
    it('title should render', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <Title />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});