// src/components/Search.jsx
import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ display: 'inline' }}>Search:</label>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        style={{ marginLeft: '5px' }}
      />
    </div>
  );
};

export default Search;
