import React, { useState, useEffect } from 'react';

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
        placeholder="Enter the name of repo for search..."
        value={entered}
        onChange={onHandleChange}
      />
      <button type="submit">Find</button>
    </form>
  );
}
