import { APIClient } from "./client";
import { coverImageMiddleware } from "./middleware";

/**
 * @typedef {Object} SearchResult
 * @property {String} id
 * @property {String} backdrop_path
 * @property {'tv'|'movie'} media_type
 * @property {String} original_name
 * @property {String} overview
 * @property {String} cover_image
 * @property {Number} vote_average
 */

/**
 * @typedef {Object} SearchResultsPage
 * @property {Number} page
 * @property {SearchResult[]} results
 */

/**
 * Search TMDB Database
 * @date 2020-12-04
 * @param {String} query
 * @returns {SearchResultsPage}
 */
export function search(query) {
  return APIClient.get("/search/multi", {
    params: {
      query,
    },
  })
    .then((res) => res.data)
    .then(coverImageMiddleware);
}
