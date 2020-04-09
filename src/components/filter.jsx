import React, { useState, useEffect } from 'react';

export default function Filter({ setLicense, setPages }) {
  const [licences, setLicences] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/licenses')
      .then((res) => res.json())
      .then((data) => setLicences(data))
      .catch(() => setLicences([{ name: 'Something went wrong. Try again later' }]));
    return () => {
    };
  }, []);

  const list = licences.map((license) => (
    <option key={license.key} value={license.key} disabled={!license.key}>
      {license.name}
    </option>
  ));

  const onHandleChange = (event) => {
    setLicense(event.target.value);
    setPages((total) => ({ ...total, current: 1 }));
  };

  return (
    <div className="select">
      <select defaultValue="DEFAULT" onChange={onHandleChange} className="browser-default">
        <option value="DEFAULT" disabled>
          Select license to filter
        </option>
        <option key="any" value="">
          Any license
        </option>
        <optgroup label="Most common licenses">
          {list}
        </optgroup>
      </select>
    </div>
  );
}
