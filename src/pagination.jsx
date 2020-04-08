import React, { useState, useEffect } from 'react';

export default function Pagination({ pages, setPages }) {
  const { total, current } = pages;

  function choosePage(page) {
    if (page >= 1) {
      setPages((state) => ({ ...state, current: page }));
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="pagination">
      <a className={current === 1 ? 'disabled' : ''} onClick={() => choosePage(1)}>
        {' '}
        {'<<'}
        {' '}
      </a>
      <a className={current === 1 ? 'disabled' : ''} onClick={() => choosePage(current - 1)}>
        {' '}
        {'<'}
        {' '}
      </a>
      <a className="active">
        {' '}
        {current}
        {' '}
      </a>
      <a className={current === total ? 'disabled' : ''} onClick={() => choosePage(current + 1)}>
        {' '}
        {'>'}
        {' '}
      </a>
      <a className={current === total ? 'disabled' : ''} onClick={() => choosePage(total)} title={total}>
        {' '}
        {'>>'}
        {' '}
      </a>
    </div>
  );
}
