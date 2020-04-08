import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Filter({ setLicense }) {
  const [licences, setLicences] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/licenses')
      .then((res) => res.json())
      .then((data) => setLicences(data))
      .catch((e) => console.log(e));
    return () => {
    };
  }, []);

  const list = licences.map((license) => (
    <option key={license.key} value={license.key}>
      {license.name}
    </option>
  ));

  const onHandleChange = (event) => {
    setLicense(event.target.value);
  };

  return (
    <div className="select">
      <select defaultValue="DEFAULT" onChange={onHandleChange} className="browser-default">
        <option value="DEFAULT" disabled>
          Select license to filter
        </option>
        {list}
      </select>
    </div>
  );
}
