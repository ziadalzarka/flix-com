import { useState } from "react";
import { createContainer } from "unstated-next";

function useSearch(initialState = { query: "", results: [] }) {
  let [query, setQuery] = useState(initialState.query);

  return { query, setQuery };
}

export const SearchContainer = createContainer(useSearch);
