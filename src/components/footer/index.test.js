import Footer from './index';
import { render, screen } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';

describe('Footer', () => {
    it('should render correctly', () => {
        const component = render(
            <BrowserRouter>
                <Route>
                    <Footer />
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });

    it('should return correct value', () => {
        render(
            <BrowserRouter>
                <Route>
                    <Footer />
                </Route>
            </BrowserRouter>
        );

        expect(screen.getByText('About us'));
        expect(screen.getByText('Contact us'));
    });
});