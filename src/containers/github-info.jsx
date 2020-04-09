import React, { useState, useEffect } from 'react';
import Loader from '../messages/loader';
import Error from '../messages/error';
import Pagination from '../components/pagination';
import EmptyList from '../messages/empty';

export default function GitHubInfo({ license, query, pages, setPages }) {
  const [repos, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function requestAPI(filter = '') {
    const monthAgo = new Date(Date.now() - 1000 * 3600 * 24 * 31).toISOString().slice(0, 10);
    const url = `https://api.github.com/search/repositories?q=${query}+language:javascript+created%3A%3E${monthAgo}${filter}&sort=stars&page=${pages.current}`;
    setError(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data.items);
        const total = Math.ceil((data.total_count > 1000 ? 1000 : data.total_count) / 30);
        setPages({ total, current: pages.current });
      })
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }

  useEffect(() => {
    let filter = '';
    if (license) filter = `+license:${license}`;
    setLoading(true);
    requestAPI(filter);
    return () => { };
  }, [license, query, pages.current]);

  function dateFormatter(oldDate) {
    return new Date(oldDate).toLocaleDateString();
  }

  let list = repos.map((repo) => (
    <div key={repo.id}>
      <h4>
        <a href={repo.html_url}>{repo.name}</a>
        <span>
          <sup>
            <i className="fa fa-star" aria-hidden="true" />
            {' '}
            {repo.stargazers_count}
          </sup>
          <sub>
            <i className="fa fa-calendar" aria-hidden="true" />
            {' '}
            {dateFormatter(repo.created_at)}
          </sub>
        </span>
      </h4>
    </div>
  ));

  if (error) return <Error />;

  if (list.length === 0) {
    list = <EmptyList query={query} license={license} />;
  }

  return (
    <>
      {loading ? <Loader /> : list }
      {pages.total > 1 ? <Pagination pages={pages} setPages={setPages} /> : null}
    </>
  );
}
