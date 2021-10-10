import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { cleanFavoriteAction } from "../actions/Favorite.actions";

import { CenterButton, Title } from "../styles";

export default function Favorites() {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Página de favoritos</Title>
      <CenterButton>
        <Link to="/">Página Inicial</Link>
      </CenterButton>
      <CenterButton
        onClick={() => {
          dispatch(cleanFavoriteAction());
        }}
      >
        Apagar tudo
      </CenterButton>
      <Card />
    </div>
  );
}
