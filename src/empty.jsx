import React from 'react';

export default function EmptyList({ query, license }) {
  return (
    <div>
      <h2>Couldn’t find any repositories matching '{query}' with {license} license</h2>
      <h3>Try to change your request</h3>
      <img src="./empty.png" alt="" />
    </div>
  );
}
