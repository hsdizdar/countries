import styled, { keyframes } from 'styled-components';
import { colors } from '../../theme/colors';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const SpinnerElement = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: ${colors.primary};
    animation: ${spin} 1s ease-in-out infinite;
`;
