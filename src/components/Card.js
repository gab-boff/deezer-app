import React, { useState, useEffect } from "react";

import { deezerChart, deezerSearch } from "../services/api";
import { Container } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { favoriteAction } from "../actions/Favorite.actions";

import Player from "./Player";
import Pagination from "./Pagination";

export default function Card() {
  const dispatch = useDispatch();

  const resultSearch = useSelector((state) => state.search);
  const resultFavorite = useSelector((state) => state.favorite);

  const [theCard, setTheCard] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/favorites") {
      setTheCard(resultFavorite.arr);
    } else if (resultSearch !== "") {
      deezerSearch(resultSearch).then(({ data }) => {
        setTheCard(data.data);
      });
    } else {
      deezerChart().then(({ data }) => {
        setTheCard(data.tracks.data);
      });
    }
  }, [resultSearch, resultFavorite]);

  return (
    <div>
      {console.log(resultSearch)}
      {theCard?.map((response) => (
        <Container
          className="border border-primary d-flex"
          style={{ marginTop: "20px" }}
          key={response.id}
        >
          <img src={response.album.cover_medium} alt="Capa do álbum" />
          <Container>
            <div>{`Título: ${response.title}`}</div>
            <div>{`Álbum: ${response.album.title}`}</div>
            <div>{`Artista: ${response.artist.name}`}</div>
            <div>{`Duração: ${response.duration} segundos`}</div>
            <Player theSong={response.preview} />
            <button>
              <a href={response.link}>Música Completa</a>
            </button>
            {/* <FavoriteButton card={response} /> */}
            <button
              onClick={() => {
                dispatch(favoriteAction([response]));
              }}
            >
              Favoritos
            </button>
          </Container>
        </Container>
      ))}
      {/* {response && (
    <Pagination
      limit={20}
      total={response.count}
      offset={offset}
      setOffset={setOffset}
    /> */}
  )}
    </div>
  );
}
