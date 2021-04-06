import React from 'react';
import { render } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';
import RenderWatches from './RenderWatches';

describe('RenderWatches', () => {
    it('component should render', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <RenderWatches />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});