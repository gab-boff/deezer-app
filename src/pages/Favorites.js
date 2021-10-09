import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { removeFavoriteAction} from "../actions/Favorite.actions";

export default function Favorites() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/">Página Inicial</Link>
      <div>Página de favoritos</div>
      <button onClick={() => {
        dispatch(removeFavoriteAction())
      }}>
        Apagar
      </button>
      <Card />
    </div>
  );
}
