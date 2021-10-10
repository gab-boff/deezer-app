import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { CenterButton } from "../styles";

export default function Main() {
  return (
    <div>
      <SearchBar />

      <CenterButton>
        <Link to="/favorites">Músicas Favoritas</Link>
      </CenterButton>
      <Card />
    </div>
  );
}
