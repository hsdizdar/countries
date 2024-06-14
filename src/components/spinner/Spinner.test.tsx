import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner Component', () => {
    it('should render the Spinner component', () => {
        render(<Spinner />);

        const spinnerWrapper = screen.getByTestId('spinner-wrapper');
        const spinnerElement = screen.getByTestId('spinner-element');

        expect(spinnerWrapper).toBeInTheDocument();
        expect(spinnerElement).toBeInTheDocument();
    });
});
