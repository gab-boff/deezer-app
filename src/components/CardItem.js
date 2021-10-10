import React, { useState, useEffect } from "react";

import Player from "./Player";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  favoriteAction,
  removeFavoriteAction,
} from "../actions/Favorite.actions";

import { Cards, FavButton, CardButton, Block, Text, aLink } from "../styles";

export default function CardItem(props) {
  const dispatch = useDispatch();

  const resultFavorite = useSelector((state) => state.favorite);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteButton = (e) => {
    if (isFavorite) {
      dispatch(removeFavoriteAction(props.data.id));
    } else {
      dispatch(favoriteAction([props.data]));
    }
  };

  useEffect(() => {
    const checkIsFavorite = () => {
      const arrayResult = resultFavorite.arr.filter((card) => {
        return card.id === props.data.id;
      });

      if (arrayResult.length === 0) {
        return false;
      }

      return true;
    };
    setIsFavorite(checkIsFavorite());
  }, [isFavorite, props.data.id, resultFavorite.arr]);

  return (
    <div>
      <Cards key={props.data.id}>
        <Block>
          <div>
            <img src={props.data.album.cover_medium} alt="Capa do álbum" />
          </div>
        </Block>
        <Block>
          <div>
            <Text>{`Título: ${props.data.title}`}</Text>
            <Text>{`Álbum: ${props.data.album.title}`}</Text>
            <Text>{`Artista: ${props.data.artist.name}`}</Text>
            <Text>{`Duração: ${props.data.duration} segundos`}</Text>
          </div>
        </Block>
        <Block>
          <div>
            <Player theSong={props.data.preview} />

            <a href={props.data.link}>
              <CardButton>Música Completa</CardButton>
            </a>
            <FavButton
              onClick={() => {
                handleFavoriteButton();
              }}
            >
              {isFavorite ? (
                <i class="fas fa-heart"></i>
              ) : (
                <i class="far fa-heart"></i>
              )}
            </FavButton>
          </div>
        </Block>
      </Cards>
    </div>
  );
}
