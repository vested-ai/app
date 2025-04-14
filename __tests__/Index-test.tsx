import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../app/index';

describe('<App />', () => {
    it('renders correctly', async () => {
        const { getByTestId } = render(<App />);
        
        await waitFor(() => {
            // Look for the link container that contains the text
            const linkContainer = getByTestId('login-link');
            expect(linkContainer).toBeTruthy();
        }, { timeout: 3000 });
    });
});
