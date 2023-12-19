import React from 'react';
import {usePagesArray} from '../../../hooks/usePagesArray';

const Pagination = ({page, pagesArray, changePage}) => {

  return (
      <div className="page__wrapper">
        {pagesArray.map((pageNumber) => {
          return <div
              key={pageNumber}
              className={page === pageNumber ? 'page page__current' : 'page'}
              onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </div>;
        })}
      </div>
  );
};

export default Pagination;