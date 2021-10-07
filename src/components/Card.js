import React, { useState, useEffect } from "react";
import { deezerChart, deezerSearch } from "../services/api";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Card() {
  const result = useSelector((state) => state.search);
  const [theCard, setTheCard] = useState([]);

  useEffect(() => {
    if (result !== "") {
      deezerSearch(result).then(({ data }) => {
        console.log(data);
        setTheCard(data.data);
      });
    } else {
      deezerChart().then(({ data }) => {
        console.log(data);
        setTheCard(data.tracks.data);
      });
    }
  }, [result]);

  const playAudio = (e) => {
    const audioEl = document.getElementsByClassName("audio-element");
    // audioEl.play();
    console.log(audioEl)
  };

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
            <div>
              <button onClick={playAudio}>
                <span>Play Audio</span>
              </button>
              <audio className="audio-element">
                <source src={response.preview}></source>
              </audio>
            </div>
          </Container>
        </Container>
      ))}
    </div>
  );
}
