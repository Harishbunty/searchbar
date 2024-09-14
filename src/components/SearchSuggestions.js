import React from 'react';
import './SearchSuggestions.css';

const SearchSuggestions = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) {
    return null; // Don't render anything if there are no suggestions
  }

  return (
    <ul className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="suggestion-item"
          onClick={() => onSelect(suggestion)} // Pass selected suggestion back to parent
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
