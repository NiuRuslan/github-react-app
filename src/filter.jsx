import React, { useState, useEffect } from 'react';

export default function Filter({setLicense}) {
  const [licences, setLicences] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/licenses')
      .then((res) => res.json())
      .then((data) => setLicences(data));
    return () => {
    };
  }, []);

  const list = licences.map((license) => (
    <option key={license.key} value={license.key}>
      {license.name}
    </option>
  ));

  const onHandleChange = (event) => {
    setLicense(event.target.value)
  }

  return (
    <select defaultValue="DEFAULT" onChange={onHandleChange}>
      <option value="DEFAULT" disabled>
        Select license for filter
      </option>
      {list}
    </select>
  );
}
