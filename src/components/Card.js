import React, { useState, useEffect } from "react";
import { deezerChart } from "../services/api";
import { Container } from "react-bootstrap";

export default function Card() {
  const [theCard, setTheCard] = useState([]);
  useEffect(() => {
    deezerChart().then(({ data }) => {
      console.log(data)
      setTheCard(data.tracks.data);
    });
  }, []);

  return (
    <div>
      {console.log(theCard)}
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
          </Container>
        </Container>
      ))}
    </div>
  );
}
