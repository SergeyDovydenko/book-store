import React, { useState } from "react";

interface PaginationProps {
  page?: number;
  onClick?: (page: number) => void;
  totalRecords: number;
  postPerPage?: number;
}

const range = (from: number, to: number): number[] => {
  const list: number[] = [];

  for (let i = from; i <= to; i++) {
    list.push(i);
  }

  return list;
};

const generatePagination = (page: number, totalPages: number) => {
  if (totalPages < 7) {
    return range(1, 6);
  }

  if (page < 5) {
    return [...range(1, 5), "...", totalPages];
  }

  if (page > totalPages - 4) {
    return [1, "...", ...range(totalPages - 4, totalPages)];
  }

  return [1, "...", ...range(page - 1, page + 1), "...", totalPages];
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalRecords,
  onClick,
  postPerPage = 10,
}) => {
  const [activePage, setActivePage] = useState(page ?? 1);
  const totalPages = totalRecords / postPerPage;

  const pagination = generatePagination(activePage, totalPages);

  return (
    <div>
      {pagination.map((item, index) => (
        <React.Fragment key={index}>
          {typeof item === "number" ? (
            <button
              style={{ backgroundColor: item === activePage ? "red" : "white" }}
              onClick={() => {
                setActivePage(item);
                onClick?.(item);
              }}
            >
              {item}
            </button>
          ) : (
            <span>{item}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Pagination;
