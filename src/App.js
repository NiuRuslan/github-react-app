import React, { useState, useEffect } from 'react';
import Search from './search';
import Filter from './filter';
import GitHubInfo from './github-info';
import './App.css';

function App() {
  const [license, setLicense] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log(license);
    console.log(query);
  }, [license, query]);

  return (
    <>
      <header>
        <Search setQuery={setQuery} />
        <Filter setLicense={setLicense} />
      </header>
      <GitHubInfo license={license} query={query} />
    </>
  );
}

export default App;
