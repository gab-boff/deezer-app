import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import { removeFavoriteAction } from "../actions/Favorite.actions";

export default function Favorites() {
  const resultFavorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
// usar useEffect e resultFavorite para setar localStorage;
  return (
    <div>
      <Link to="/">Página Inicial</Link>
      <div>Página de favoritos</div>
      <button onClick={() => {
        dispatch(removeFavoriteAction())
      }}>
        Apagar
      </button>
      {/* {console.log(resultFavorite)} */}
      <Card />
    </div>
  );
}
