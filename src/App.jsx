import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";

import "./App.css";

function App() {
  const Home = lazy(() => import("pages/home/Home"));
  const Movies = lazy(() => import("pages/movies/Movies"));
  const Series = lazy(() => import("pages/series/Series"));
  const Genres = lazy(() => import("pages/genres/Genres"));
  const Search = lazy(() => import("pages/search/Search"));
  const MovieDetail = lazy(() => import("pages/movieDetail/MovieDetail"));
  const Notfound = lazy(() => import("pages/not-found"));
  const Footer = lazy(() => import("components/Footer/Footer"));

  return (
    <BrowserRouter>
      <Header />
      <main className="Main">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/peliculas"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="/series"
            element={
              <Suspense fallback={<Loader />}>
                <Series />
              </Suspense>
            }
          />
          <Route
            path="/generos/:type/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Genres />
              </Suspense>
            }
          />
          <Route
            path="/generos"
            element={
              <Suspense fallback={<Loader />}>
                <Genres />
              </Suspense>
            }
          />
          <Route
            path="/m/:id"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetail />
              </Suspense>
            }
          />
          <Route
            path="/s/:id"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetail />
              </Suspense>
            }
          />
          <Route
            path="/busqueda/:query"
            element={
              <Suspense fallback={<Loader />}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <Notfound />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
