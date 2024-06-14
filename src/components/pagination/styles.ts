import styled from 'styled-components';

import { colors } from '../../theme/colors';

type StyledProps = {
    $isActive?: boolean;
};

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const Button = styled.button<StyledProps>`
    margin: 0 0.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${colors.primary};
    border-radius: 0.25rem;
    background-color: ${({ $isActive }) => ($isActive ? colors.primary : colors.white)};
    color: ${({ $isActive }) => ($isActive ? colors.white : colors.primary)};

    &:hover {
        background-color: ${({ $isActive }) => ($isActive ? colors.lightPrimary : colors.buttonHoverColor)};
    }

    &:disabled {
        background-color: ${colors.buttonDisabledBackgroundColor};
        color: ${colors.buttonDisabledColor};
        cursor: not-allowed;
        border: none;
    }

    @media (max-width: 768px) {
        padding: 0.375rem 0.625rem;
        margin: 0 0.12rem;
        font-size: 0.75rem;
    }
`;
