import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from './my-watch.module.css';
import { BrowserRouter, Route } from 'react-router-dom';

describe('MyWatch', () => {
    it('should render correct', () => {
        const deleteWatch = () => {
            return null;
        };

        const naviagateToEdit = () => {
            return null;
        };

        const component = render(
            <BrowserRouter>
                <Route>
                    <article className={styles.watch}>
                        <img className={styles['watch-image']} src='../../images/rolex_logo.png' alt='watch' />
                        <div className={styles.info}>
                            <p className={styles.name}>Some name</p>
                            <p>Some description</p>
                            <div>
                                <p>100</p>
                                <span>$</span>
                            </div>
                        </div>
                        <div className={styles['account-btns']}>
                            <button className={styles['delete-btn']} type='submit' id='123' onClick={deleteWatch}>Delete</button>
                            <button className={styles['edit-btn']} onClick={naviagateToEdit}>Edit</button>
                        </div>
                    </article>
                </Route>
            </BrowserRouter>
        );

        expect(component).toMatchSnapshot();
    });

    it('component should have the relevant tags', () => {
        const deleteWatch = () => {
            return null;
        };

        const naviagateToEdit = () => {
            return null;
        };

        const component = render(
            <article className={styles.watch}>
                <img className={styles['watch-image']} src='../../images/rolex_logo.png' alt='watch' />
                <div className={styles.info}>
                    <p className={styles.name}>Some name</p>
                    <p>Some description</p>
                    <div>
                        <p>100</p>
                        <span>$</span>
                    </div>
                </div>
                <div className={styles['account-btns']}>
                    <button className={styles['delete-btn']} type='submit' id='123' onClick={deleteWatch}>Delete</button>
                    <button className={styles['edit-btn']} onClick={naviagateToEdit}>Edit</button>
                </div>
            </article>
        );

        expect(component.getAllByRole('article'));
        expect(component.getAllByRole('article')).toHaveLength(1);
        expect(component.getAllByRole('img'));
        expect(component.getAllByRole('img')).toHaveLength(1);
        expect(component.getAllByRole('button'));
        expect(component.getAllByRole('button')).toHaveLength(2);
    });

    it('component should have attributes', () => {
        const deleteWatch = () => {
            return null;
        };

        const naviagateToEdit = () => {
            return null;
        };

        const component = render(
            <article className={styles.watch}>
                <img className={styles['watch-image']} src='../../images/rolex_logo.png' alt='watch' />
                <div className={styles.info}>
                    <p className={styles.name}>Some name</p>
                    <p>Some description</p>
                    <div>
                        <p>100</p>
                        <span>$</span>
                    </div>
                </div>
                <div className={styles['account-btns']}>
                    <button className={styles['delete-btn']} type='submit' id='123' onClick={deleteWatch}>Delete</button>
                    <button className={styles['edit-btn']} onClick={naviagateToEdit}>Edit</button>
                </div>
            </article>
        );

        expect(component.getByRole('img')).toHaveAttribute('alt');
        expect(component.getByRole('img')).toHaveAttribute('src');
    });
});