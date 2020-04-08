import React, { useState } from 'react';

export default function Search({setQuery}) {
  const [entered, setEntered] = useState('');

  const onHandleChange = (e) => setEntered(e.target.value);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setQuery(entered);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="Search by repo's name..."
        value={entered}
        onChange={onHandleChange}
        className="search"
      />
      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
  );
}
