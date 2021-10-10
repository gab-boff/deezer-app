import React, { useState, useEffect } from "react";

import { deezerChart, deezerSearch } from "../services/api";

import { useSelector } from "react-redux";


import CardItem from "./CardItem";

import { CenterButton } from "../styles";

export default function Card() {

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
        <CardItem data={response} key={response.id}></CardItem>
              ))}
      <CenterButton
       onClick={() => previousPage()}
      >Anterior</CenterButton>
      <CenterButton
        onClick={() => nextPage()}
      >Proximo</CenterButton>
    </div>
  );
}
