import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import Filter from '../components/filter';
import GitHubInfo from './github-info';

function App() {
  const [license, setLicense] = useState(null);
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState({ total: 1, current: 1 });

  return (
    <>
      <header>
        <Search setQuery={setQuery} setPages={setPages} />
        <Filter setLicense={setLicense} setPages={setPages} />
      </header>
      <GitHubInfo license={license} query={query} setPages={setPages} pages={pages} />
    </>
  );
}

export default App;
