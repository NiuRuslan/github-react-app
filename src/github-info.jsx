import React, { useState, useEffect } from 'react';


export default function GitHubInfo({ license, query }) {
  const [repos, setRepo] = useState([]);

  function requestAPI(filter = '') {
    const monthAgo = new Date(Date.now() - (1000 * 3600 * 24 * 31)).toISOString().slice(0, 10);
    const url = `https://api.github.com/search/repositories?q=${query}+language:javascript+created%3A%3E${monthAgo}${filter}&sort=stars&per_page=50`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepo(data.items));
  }

  useEffect(() => {
    let filter = '';
    if (license) filter = `+license:${license}`;
    requestAPI(filter);
    return () => {
    };
  }, [license, query]);

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
}
