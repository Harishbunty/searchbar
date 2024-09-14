import React, { useState } from 'react';
import SearchSuggestions from './SearchSuggestions';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      // Replace with actual API or data fetching logic
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data.map(country => country.name.common));
        })
        .catch(() => setSuggestions([]));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && <SearchSuggestions suggestions={suggestions} />}
    </div>
  );
};

export default SearchBar;
