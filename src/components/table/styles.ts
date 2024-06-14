import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
`;

export const Th = styled.th`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 0.75rem 1rem;
`;

export const Td = styled.td`
    padding: 0.75rem 1rem;
    min-width: 1rem;
    max-width: 1rem;
`;

export const Tr = styled.tr`
    border-bottom: 1px solid ${colors.tableBorderColor};

    &:nth-of-type(even) {
        background-color: ${colors.tableEvenRowColor};
    }
    &:last-of-type {
        border-bottom: 2px solid ${colors.primary};
    }
`;
