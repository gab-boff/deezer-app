import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from "../actions/Search.actions"

import { Container, Button } from "react-bootstrap";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('')


  return (
    <Container className="input-group">
      <input
        type="text"
        className="form-control rounded"
        placeholder="Search"
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <Button type="button" className="btn" onClick={() => {
        dispatch(searchAction(searchText));
      }}>
        Search
      </Button>
    </Container>
  );
}
