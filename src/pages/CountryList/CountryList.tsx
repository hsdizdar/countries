import { ChangeEvent, useState } from 'react';
import { useQuery } from '@apollo/client';

import { StyledInfoText, Wrapper } from './styles';

import Pagination from '../../components/pagination/Pagination';
import CountryTable from '../../components/table/CountryTable';
import Spinner from '../../components/spinner/Spinner';
import Input from '../../components/input/Input';
import { GET_COUNTRIES } from '../../services/queries';
import { CountriesData } from '../../types';

const CountryList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    const { loading, error, data } = useQuery<CountriesData>(GET_COUNTRIES);

    const filteredCountries = (data?.countries || []).filter(country =>
        country.code.toLowerCase().includes(filter.toLowerCase()),
    );

    const itemsPerPage = 10;
    const totalItems = filteredCountries?.length || 0;
    const paginatedCountries = filteredCountries?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => setCurrentPage(page);

    if (loading) return <Spinner />;

    if (error) return <Wrapper>Error: {error.message}</Wrapper>;

    if (!data?.countries.length) return null;

    return (
        <Wrapper>
            <h1>Countries</h1>
            <Input placeholder="Filter by country code" value={filter} onChange={handleFilterChange} />
            {Boolean(filteredCountries.length) ? (
                <>
                    {paginatedCountries && <CountryTable countries={paginatedCountries} />}
                    <Pagination currentPage={currentPage} totalCount={totalItems} onPageChange={handlePageChange} />
                </>
            ) : (
                <StyledInfoText>Country is not found.</StyledInfoText>
            )}
        </Wrapper>
    );
};

export default CountryList;
