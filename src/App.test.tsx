import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './App/store';

import App from './App';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })
    it('renders App component', () => {
        expect(screen.getByText('Savannah Informatics Demo')).toBeInTheDocument();
        expect(screen.getByRole('status')).toBeInTheDocument();
        expect(screen.queryByText(/Searches/)).toBeNull();
    });
})