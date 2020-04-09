import React from 'react';

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
      <button className={current === 1 ? 'disabled' : ''} onClick={() => choosePage(1)}>
        {'<<'}
      </button>
      <button className={current === 1 ? 'disabled' : ''} onClick={() => choosePage(current - 1)}>
        {'<'}
      </button>
      <button className="active">
        {current}
      </button>
      <button className={current === total ? 'disabled' : ''} onClick={() => choosePage(current + 1)} title={current + 1}>
        {'>'}
      </button>
      <button className={current === total ? 'disabled' : ''} onClick={() => choosePage(total)} title={total}>
        {'>>'}
      </button>
    </div>
  );
}
