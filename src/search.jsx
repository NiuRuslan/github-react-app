import React, { useState } from 'react';

export default function Search({ setQuery, setPages }) {
  const [entered, setEntered] = useState('');

  const onHandleChange = (e) => setEntered(e.target.value);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setQuery(entered);
    setPages((total) => ({ ...total, current: 1 }));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="Search by repo's name..."
        value={entered}
        onChange={onHandleChange}
        className="search"
      />
      <button type="submit" aria-label="search"><i className="fa fa-search" aria-hidden="true" /></button>
    </form>
  );
}
