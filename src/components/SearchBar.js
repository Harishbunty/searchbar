import React, { useState, useEffect } from 'react';
import SearchSuggestions from './SearchSuggestions';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      if (query.length > 1) {
        setIsLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${query}`)
          .then(response => response.json())
          .then(data => {
            setSuggestions(data.map(country => country.name.common));
            setIsLoading(false);
          })
          .catch(() => {
            setSuggestions([]);
            setIsLoading(false);
          });
      } else {
        setSuggestions([]);
      }
    };

    const debounce = setTimeout(fetchData, 300); // 300ms delay
    return () => clearTimeout(debounce);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion); // Update input with selected suggestion
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <span className="search-icon">&#x1F50D;</span> {/* Search icon */}
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={handleChange}
        />
      </div>
      {isLoading && <div className="loading">Loading...</div>}
      <SearchSuggestions suggestions={suggestions} onSelect={handleSelect} />
    </div>
  );
};

export default SearchBar;
