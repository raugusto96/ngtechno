import React from "react";
import useRunnersContext from "../../../hooks/useRunnersContext";
import { PaginateProps } from "./protocol";
import { Container, PaginateContainer, PaginateNumber } from "./styles";

const Paginate: React.FC<PaginateProps> = () => {
  const { maxPages, page, setPage } = useRunnersContext();

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Número máximo de páginas visíveis
    let startPage = 1;
    let endPage = maxPages;

    if (maxPages > maxVisiblePages) {
      if (page <= Math.ceil(maxVisiblePages / 2)) {
        endPage = maxVisiblePages;
      } else if (page >= maxPages - Math.floor(maxVisiblePages / 2)) {
        startPage = maxPages - maxVisiblePages + 1;
      } else {
        startPage = page - Math.floor(maxVisiblePages / 2);
        endPage = page + Math.floor(maxVisiblePages / 2);
      }
    }

    if (startPage !== 1) {
      pages.push(
        <PaginateNumber key={1} onClick={() => setPage(1)}>
          {1}
        </PaginateNumber>
      );
      if (startPage !== 2) {
        pages.push(<PaginateNumber key='ellipsis-start'>...</PaginateNumber>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginateNumber key={i} onClick={() => setPage(i)} active={page === i}>
          {i}
        </PaginateNumber>
      );
    }

    if (endPage !== maxPages) {
      if (endPage !== maxPages - 1) {
        pages.push(<PaginateNumber key='ellipsis-end'>...</PaginateNumber>);
      }
      pages.push(
        <PaginateNumber key={maxPages} onClick={() => setPage(maxPages)}>
          {maxPages}
        </PaginateNumber>
      );
    }

    return pages;
  };

  return (
    <Container>
      <PaginateContainer>
        <PaginateNumber
          onClick={() =>
            setPage((prevPage: number) => (prevPage === 1 ? 1 : prevPage - 1))
          }
        >
          {"<"}
        </PaginateNumber>
        {renderPageNumbers()}
        <PaginateNumber
          onClick={() =>
            setPage((prevPage: number) =>
              prevPage === maxPages ? maxPages : prevPage + 1
            )
          }
        >
          {">"}
        </PaginateNumber>
      </PaginateContainer>
    </Container>
  );
};

export default Paginate;
