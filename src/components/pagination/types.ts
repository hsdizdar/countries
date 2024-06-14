export interface UsePaginationProps {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    siblingCount: number;
}

export interface PaginationProps {
    currentPage: number;
    pageSize?: number;
    totalCount: number;
    siblingCount?: number;
    onPageChange: (page: number) => void;
}
