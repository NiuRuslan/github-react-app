import React, { useState, useEffect } from 'react';
import Filter from './filter';
import GitHubInfo from './github-info';
import './App.css';

function App() {
  const [license, setLicense] = useState(null);

  useEffect(() => {
    console.log(license);
  }, [license]);

  return (
    <div className="App">
      <header className="App-header">
        <Filter setLicense={setLicense} />
        <GitHubInfo license={license} />
      </header>
    </div>
  );
}

export default App;
