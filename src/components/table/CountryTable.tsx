import { FC } from 'react';

import { Table, Td, Th, Tr } from './styles';
import { CountryTableProps } from './types';

const CountryTable: FC<CountryTableProps> = ({ countries }) => (
    <Table>
        <thead>
            <Tr>
                <Th>Code</Th>
                <Th>Name</Th>
            </Tr>
        </thead>
        <tbody>
            {countries.map(country => (
                <Tr key={country.code}>
                    <Td>{country.code}</Td>
                    <Td>{country.name}</Td>
                </Tr>
            ))}
        </tbody>
    </Table>
);

export default CountryTable;
