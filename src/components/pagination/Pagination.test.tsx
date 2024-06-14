import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination Component', () => {
    const onChangePageMock = jest.fn();

    it('should render pagination buttons correctly', () => {
        render(<Pagination currentPage={1} totalCount={50} onPageChange={onChangePageMock} />);

        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should call onChangePage when clicking on a page number button', () => {
        render(<Pagination currentPage={1} totalCount={50} onPageChange={onChangePageMock} />);

        fireEvent.click(screen.getByText('2'));

        expect(onChangePageMock).toHaveBeenCalledTimes(1);
        expect(onChangePageMock).toHaveBeenCalledWith(2);
    });

    it('should disable previous button on first page', () => {
        render(<Pagination currentPage={1} totalCount={50} onPageChange={onChangePageMock} />);

        const previousButton = screen.getByText('<');
        expect(previousButton).toBeDisabled();
    });

    it('should disable next button on last page', () => {
        render(<Pagination currentPage={5} totalCount={50} onPageChange={onChangePageMock} />);

        const nextButton = screen.getByText('>');
        expect(nextButton).toBeDisabled();
    });

    it('should render ellipsis buttons correctly for more than 5 pages', () => {
        render(<Pagination currentPage={3} totalCount={100} onPageChange={onChangePageMock} />);

        expect(screen.getByText('...')).toBeInTheDocument();
    });
});
