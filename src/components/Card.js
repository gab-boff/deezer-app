import React, { useState, useEffect } from "react";

import { deezerChart, deezerSearch } from "../services/api";

import Player from "./Player";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favoriteAction } from "../actions/Favorite.actions";

import { Cards } from "../styles";

export default function Card() {
  const dispatch = useDispatch();

  const resultSearch = useSelector((state) => state.search);
  const resultFavorite = useSelector((state) => state.favorite)

  const [theCard, setTheCard] = useState([]);
  const [theIndex, setTheIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/favorites") {
      setTheCard(resultFavorite.arr)
    } else if (resultSearch !== "") {
      setTheIndex(0);
      deezerSearch(resultSearch, theIndex).then(({ data }) => {
        setTheCard(data.data);
      });
    } else {
      deezerChart(theIndex).then(({ data }) => {
        setTheCard(data.tracks.data);
      });
    }
  }, [resultSearch, resultFavorite, theIndex]);

  const previousPage = () => {
    if (theIndex <= 20) {
      setTheIndex(0);
    } else {
      setTheIndex(theIndex - 20)
    }
  }

  const nextPage = () => {
    setTheIndex(theIndex + 20);
  }

  return (
    <div>
      {theCard?.map((response) => (
        <Cards
          key={response.id}
        >
          <img src={response.album.cover_medium} alt="Capa do álbum" />
          <div>
            <div>{`Título: ${response.title}`}</div>
            <div>{`Álbum: ${response.album.title}`}</div>
            <div>{`Artista: ${response.artist.name}`}</div>
            <div>{`Duração: ${response.duration} segundos`}</div>
            <Player theSong={response.preview} />
            <button>
              <a href={response.link}>Música Completa</a>
            </button>
            <button
              onClick={() => {
                dispatch(favoriteAction([response]));
              }}
            >
              Favoritos
            </button>
          </div>
        </Cards>
      ))}
      <button
       onClick={() => previousPage()}
      >Anterior</button>
      <button
        onClick={() => nextPage()}
      >Proximo</button>
    </div>
  );
}
