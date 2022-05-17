export const API_URL = "https://api.themoviedb.org/3/";
export const LANGUAGE = "es";

export const API_TRENDING = `${API_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_TV_SHOW = `${API_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

export const API_MOVIES_GENRE = `${API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_TV_GENRE = `${API_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

export const API_MOVIES_RECOMMENDATIONS = `${API_URL}movie/335787/recommendations?api_key=414ef7269a2fad53753e1a5d42b47cfe&language=en-US&page=1`;

export  const API_SEARCH = `${API_URL}search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&page=1&include_adult=false&query=`;
export const API_DISCOVER_MOVIE = `${API_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const API_DISCOVER_TV = `${API_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

export const API_IMG_PREFIX = "https://image.tmdb.org/t/p/w185";
export const API_IMG_PREFIX__HD = "https://image.tmdb.org/t/p/w780";
