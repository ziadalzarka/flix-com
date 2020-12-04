/**
 * Get backdrop with fallback to poster
 * @date 2020-12-04
 * @param {SearchResult} item
 * @returns {String}
 */
function getBackdrop(item) {
  if (item.poster_path) {
    return `https://image.tmdb.org/t/p/w342${item.poster_path}`;
  }

  return `https://via.placeholder.com/342x700.jpg`;
}

export function coverImageMiddleware(data) {
  const results = data.results.map((item) => ({
    ...item,
    cover_image: getBackdrop(item),
  }));
  return { ...data, results };
}
