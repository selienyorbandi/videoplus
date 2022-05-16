import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Series from "pages/Series/Series";
import Genres from "pages/Genres/Genres";
import MovieDetail from "pages/MovieDetail/MovieDetail";
import Search from "pages/Search/Search";
import Notfound from "pages/not-found";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/generos" element={<Genres />} />
          <Route path="/m/:id" element={<MovieDetail/>} />
          <Route path="/s/:id" element={<MovieDetail/>} />
          <Route path="/search/:query" element={<Search/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
