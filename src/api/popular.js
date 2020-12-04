import { APIClient } from "./client";
import { coverImageMiddleware } from "./middleware";

export function getPopularMovies() {
  return APIClient.get("/movie/popular")
    .then((res) => res.data)
    .then(coverImageMiddleware);
}

export function getPopularTVShows() {
  return APIClient.get("/tv/popular")
    .then((res) => res.data)
    .then(coverImageMiddleware);
}
