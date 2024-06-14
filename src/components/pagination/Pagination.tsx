import { FC } from 'react';

import { Button, Container } from './styles';
import { PaginationProps } from './types';
import { usePagination } from './hooks/usePagination';

const Pagination: FC<PaginationProps> = ({
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize = 10,
    onPageChange,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    const totalPageCount = Math.ceil(totalCount / pageSize);

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number') {
            onPageChange(page);
        }
    };

    return (
        <Container>
            <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                {'<'}
            </Button>
            {paginationRange?.map((page, index) => (
                <Button key={`button-${index}`} $isActive={page === currentPage} onClick={() => handlePageChange(page)}>
                    {page}
                </Button>
            ))}
            <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPageCount}>
                {'>'}
            </Button>
        </Container>
    );
};

export default Pagination;
