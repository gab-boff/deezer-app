import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../actions/Search.actions"

import { Input, CenterButton } from "../styles";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('')


  return (
    <div>
      <Input
        type="text"
        className="form-control rounded"
        placeholder="Search"
        onChange={ (e) => setSearchText(e.target.value) }
      />
      <CenterButton type="button" onClick={() => {
        dispatch(searchAction(searchText));
      }}>
        Search
      </CenterButton>
    </div>
  );
}
