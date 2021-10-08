import React, { useState, useEffect } from "react";
import { deezerChart, deezerSearch } from "../services/api";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Player from "./Player";

export default function Card() {
  const result = useSelector((state) => state.search);
  const [theCard, setTheCard] = useState([]);

  useEffect(() => {
    if (result !== "") {
      deezerSearch(result).then(({ data }) => {
        setTheCard(data.data);
      });
    } else {
      deezerChart().then(({ data }) => {
        setTheCard(data.tracks.data);
      });
    }
  }, [result]);

  return (
    <div>
      {console.log(result)}
      {theCard.map((response) => (
        <Container
          className="border border-primary d-flex"
          style={{ marginTop: "20px" }}
          key={response.id}
        >
          <img src={response.album.cover_small} alt="Capa do álbum" />
          <Container>
            <div>{`Título: ${response.title}`}</div>
            <div>{`Álbum: ${response.album.title}`}</div>
            <div>{`Artista: ${response.artist.name}`}</div>
            <div>{`Duração: ${response.duration} segundos`}</div>
            <Player theSong={response.preview}/>
            <button>
              <a href={response.link}>Música Completa</a>
            </button>
          </Container>
        </Container>
      ))}
    </div>
  );
}
