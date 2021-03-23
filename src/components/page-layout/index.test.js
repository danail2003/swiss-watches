import { render, getByTestId } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';
import PageLayout from './index';

describe('PageLayout', () => {
    it('should render correct', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <PageLayout />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });
});