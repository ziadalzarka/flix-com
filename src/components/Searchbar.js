import debounce from "lodash.debounce";
import React, { useCallback } from "react";
import styled from "styled-components";
import { SearchContainer } from "../container/SearchContainer";

const Input = styled.input`
  padding: 0.5em;
  background: #444;
  border: none;
  color: white;
  flex-basis: 30%;

  @media (max-width: 1024px) {
    flex-basis: 50%;
  }

  @media (max-width: 464px) {
    flex-basis: 100%;
  }

  &:focus {
    outline: #888 solid 1px;
  }
`;

export default function Searchbar() {
  const { setQuery } = SearchContainer.useContainer();

  const handleSearch = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(debounce(handleSearch, 500), [handleSearch]);

  return <Input placeholder="Search..." onChange={handleChange}></Input>;
}
