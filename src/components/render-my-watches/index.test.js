import React from 'react';
import { render } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';
import RenderMyWatches from './RenderMyWatches';

describe('RenderMyWatches', () => {
    it('component should render', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <RenderMyWatches />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});