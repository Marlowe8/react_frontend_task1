import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', cursor: 'pointer' }}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: '0 5px' }}>
            <span
              onClick={() => paginate(number)}
              style={{
                padding: '5px 10px',
                backgroundColor: currentPage === number ? 'lightgray' : 'white',
                border: '1px solid black',
                borderRadius: '5px',
              }}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
