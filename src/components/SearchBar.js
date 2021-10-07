import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { searchAction } from "../actions/Search.actions"

import { Container, Button } from "react-bootstrap";

export default function SearchBar() {
  const dispatch = useDispatch();
  const result = useSelector(state => state.search);
  


  return (
    <Container className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <Button type="button" className="btn" onClick={() => { window.alert('batata') }}>
        Search
      </Button>
    </Container>
  );
}
