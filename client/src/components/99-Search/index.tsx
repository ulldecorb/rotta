import React from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const Search = () => (
  <div className="search">
    <Link className="search__background" to="dashboard" />
    <input type="text" placeholder="Search" className="search__input" />
    <div className="search__results" />
  </div>
);

export default Search;
