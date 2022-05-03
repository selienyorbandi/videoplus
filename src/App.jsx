import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Movies from "pages/movies/Movies";
import Series from "pages/series/Series";
import Genres from "pages/genres/Genres";
import Notfound from "pages/not-found";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

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
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
