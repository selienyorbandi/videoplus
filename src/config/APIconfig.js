export const API_URL = "https://api.themoviedb.org/3/";
export const LANGUAGE = "es";

export const API_TRENDING = `${API_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_MOVIES = `${API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_POPULAR_TV_SHOW = `${API_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

export const API_MOVIES_GENRE = `${API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;
export const API_TV_GENRE = `${API_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}`;

export const API_IMG_PREFIX = "https://image.tmdb.org/t/p/w342";
export const API_IMG_PREFIX__HD = "https://image.tmdb.org/t/p/w1280";
