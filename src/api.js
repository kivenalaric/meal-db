const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

function getPopularMovies() {
  return fetch(
    `${BASE_URL}search.php?f=a`,
  )
    .then((res) => res.json())
    .then((res) => res.meals);
}

function searchMovies(query) {
  return fetch(
    `${BASE_URL}search.php?s=${query}`,
  ).then((res) => res.json())
    .then((res) => res.meals);
}

export default { getPopularMovies, searchMovies };
