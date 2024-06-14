import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const Wrapper = styled.div`
    padding: 1rem;
    margin: 1rem;
`;

export const StyledInfoText = styled.div`
    border: 1px solid ${colors.primary};
    background-color: ${colors.lightPrimary};
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: ${colors.white};
`;
