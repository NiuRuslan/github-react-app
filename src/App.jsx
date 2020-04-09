import React, { useState, useEffect } from 'react';
import Search from './search';
import Filter from './filter';
import GitHubInfo from './github-info';
import './App.css';

function App() {
  const [license, setLicense] = useState(null);
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState({ total: 1, current: 1 });

  useEffect(() => {
  }, [license, query]);

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
