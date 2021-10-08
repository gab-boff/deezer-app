import React from 'react';
import { Link } from 'react-router-dom';

export default function Favorites(props) {
  return (
    <div>
      <Link to="/">Página Inicial</Link>
      <div>Página de favoritos</div>
    </div>
  );
}
