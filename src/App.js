import { getPopularMovies, getPopularTVShows } from "./api/popular";
import Header from "./components/Header";
import PopularSection from "./components/PopularSection";
import SearchResults from "./components/SearchResults";
import { SearchContainer } from "./container/SearchContainer";

function App() {
  return (
    <>
      <SearchContainer.Provider>
        <Header></Header>
        <SearchResults />
        <PopularSection title="Popular Movies" fetcher={getPopularMovies} />
        <PopularSection title="Popular TV Shows" fetcher={getPopularTVShows} />
      </SearchContainer.Provider>
    </>
  );
}

export default App;
