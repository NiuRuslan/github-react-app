import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GitHubInfo />
      </header>
    </div>
  );
}

const GitHubInfo = () => {
  const [repos, setRepo] = useState([]);

  useEffect(() => {
    const monthAgo = new Date(Date.now() - (1000 * 3600 * 24 * 31)).toISOString().slice(0, 10);

    fetch(`https://api.github.com/search/repositories?q=+language:javascript+created%3A%3E${monthAgo}&sort=stars`)
      .then((res) => res.json())
      .then((data) => setRepo(data.items));
    return () => {
    };
  }, []);

  function dateFormatter(oldDate) {
    return new Date(oldDate).toLocaleDateString();
  }


  const list = repos.map((repo) => (
    <div key={repo.id}>
      <a href={repo.html_url}>
        {repo.name}
      </a>
      {' - Stars: '}
      {repo.stargazers_count}
      {' - created at: '}
      {dateFormatter(repo.created_at)}
    </div>
  ));

  return (
    <div>
      {list}
    </div>
  );
};

export default App;
