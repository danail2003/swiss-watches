import React from 'react';
import { render } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';
import RenderSearchedWatches from './RenderSearchedWatches';

describe('RenderSearchedWatches', () => {
    it('component should render', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <RenderSearchedWatches />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});