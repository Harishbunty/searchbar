import React from 'react';
import './SearchSuggestions.css';

const SearchSuggestions = ({ suggestions }) => {
  return (
    <ul className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <li key={index} className="suggestion-item">
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
