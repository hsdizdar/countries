import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const StyledInput = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: 2px solid ${colors.primary};
    border-radius: 0.25rem;
    width: 20rem;
    max-width: 100%;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${colors.lightPrimary};
    }

    &::placeholder {
        color: ${colors.inputPlaceHolderColor};
    }
`;
