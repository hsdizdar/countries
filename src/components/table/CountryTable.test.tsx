import { render, screen } from '@testing-library/react';

import CountryTable from './CountryTable';

describe('CountryTable Component', () => {
    const countries = [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'MX', name: 'Mexico' },
    ];

    it('should render table with correct header and rows', () => {
        render(<CountryTable countries={countries} />);

        expect(screen.getByText('Code')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();

        const tableRows = screen.getAllByRole('row');
        expect(tableRows.length).toBe(countries.length + 1);

        countries.forEach(country => {
            expect(screen.getByText(country.code)).toBeInTheDocument();
            expect(screen.getByText(country.name)).toBeInTheDocument();
        });
    });

    it('should render no rows when countries array is empty', () => {
        render(<CountryTable countries={[]} />);

        const tableRows = screen.getAllByRole('row');
        expect(tableRows.length).toBe(1);
    });
});
