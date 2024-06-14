import { SpinnerElement, SpinnerWrapper } from './styles';

const Spinner = () => (
    <SpinnerWrapper data-testid="spinner-wrapper">
        <SpinnerElement data-testid="spinner-element" />
    </SpinnerWrapper>
);

export default Spinner;
