import React from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function Main() {

  return (
    <div>
      <SearchBar />
      <Link to="/favorites">Músicas Favoritas</Link>
      <Card />
    </div>
  );
}
